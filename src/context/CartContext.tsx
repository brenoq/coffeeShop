import { ReactNode, createContext, useState } from 'react'
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

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  formattedTotalItems: string
  fullPrice: string
  addCoffeeToCart: (coffee: CartItem) => void
  removeCoffeeFromCart: (cartItemId: number) => void
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
        changeCartItemQuantity,
        removeCoffeeFromCart,
        formattedTotalItems,
        fullPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
