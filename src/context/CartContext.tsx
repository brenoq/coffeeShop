import { ReactNode, createContext, useState } from 'react'
import { coffees } from '../data/Coffees'

export interface Coffees {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CartContextType {
  coffee: Coffees | undefined
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffee, setCoffee] = useState(coffees)
  return (
    <CartContext.Provider value={{ coffee }}>{children}</CartContext.Provider>
  )
}
