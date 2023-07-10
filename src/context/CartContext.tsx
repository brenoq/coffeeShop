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

interface CartItem extends Coffees {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

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

  console.log(cartItems, cartQuantity)

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
