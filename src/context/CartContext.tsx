import {
  ChangeEvent,
  MouseEvent,
  ReactNode,
  createContext,
  useState,
} from 'react'
import { produce } from 'immer'

export interface Coffees {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export interface CartItem extends Coffees {
  quantity: number
}

export interface AddressProps {
  bairro?: string
  cep?: string
  complemento?: string
  numero?: string
  logradouro?: string
  localidade?: string
  uf?: string
  pagamento?: string
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  formattedTotalItems: string
  fullPrice: string
  address?: AddressProps
  addCoffeeToCart: (coffee: CartItem) => void
  removeCoffeeFromCart: (cartItemId: number) => void
  handleGetAddress: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
  handleSelectPayment: (e: MouseEvent) => void
  handleConfirmOrder: () => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [address, setAddress] = useState<AddressProps>()
  const cartQuantity = cartItems.length

  const totalItems = cartItems.reduce((totalItems, item) => {
    return totalItems + item.quantity * item.price
  }, 0)

  const formattedTotalItems = totalItems.toLocaleString('pt-br', {
    style: 'decimal',
    minimumFractionDigits: 2,
  })

  const fullPrice = (totalItems + 3.5).toLocaleString('pt-br', {
    style: 'decimal',
    minimumFractionDigits: 2,
  })

  function handleConfirmOrder() {
    setCartItems([])
  }

  function handleSelectPayment(e: MouseEvent) {
    const target = e.target as HTMLInputElement
    let value = target.id

    if (target.name === 'payment') {
      switch (value) {
        case 'credit':
          value = 'Cartão de Crédito'
          break
        case 'bank':
          value = 'Cartão de Débito'
          break
        case 'money':
          value = 'Dinheiro'
          break
      }
      setAddress((state) => ({ ...state, pagamento: value }))
    }
  }

  async function handleGetAddress(e: ChangeEvent<HTMLInputElement>) {
    const cep = e.target.value

    if (e.target.name === 'cep') {
      if (e.target.value.length === 8) {
        return await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.erro === true) {
              console.log('O CEP informado não foi encontrado!')
              e.target.focus()
            } else {
              const {
                cep,
                bairro,
                complemento,
                numero,
                logradouro,
                localidade,
                uf,
              } = json

              setAddress({
                cep,
                bairro,
                complemento,
                numero,
                logradouro,
                localidade,
                uf,
              })
            }
          })
      }
    } else {
      const field = e.target.name as keyof AddressProps
      const value = e.target.value

      setAddress((state) => ({ ...state, [field]: value }))
    }
  }

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newcart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]
        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newcart)
  }

  function removeCoffeeFromCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        address,
        changeCartItemQuantity,
        removeCoffeeFromCart,
        formattedTotalItems,
        fullPrice,
        handleGetAddress,
        handleSelectPayment,
        handleConfirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
