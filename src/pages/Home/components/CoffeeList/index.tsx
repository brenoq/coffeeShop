import { CoffeeForm } from '../CoffeeForm'
import { CoffeListContainer } from './styles'
import { coffees } from '../../../../data/Coffees'

export function CoffeeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>
      <div className="cardList">
        {coffees.map((coffee) => (
          <CoffeeForm
            key={coffee.id}
            id={coffee.id}
            tags={coffee.tags}
            name={coffee.name}
            description={coffee.description}
            photo={coffee.photo}
            price={coffee.price}
          />
        ))}
      </div>
    </CoffeListContainer>
  )
}
