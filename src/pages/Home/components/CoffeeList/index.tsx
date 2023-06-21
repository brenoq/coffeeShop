import { CoffeeForm } from '../CoffeeForm'
import { CoffeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>
      <div className="cardList">
        <CoffeeForm type="expresso" />
        <CoffeeForm type="capuccino" />
        <CoffeeForm type="americano" />
        <CoffeeForm type="cubano" />
        <CoffeeForm type="havaiano" />
      </div>
    </CoffeListContainer>
  )
}
