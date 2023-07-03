import { ShoppingCart } from 'phosphor-react'
import { CoffeFormContainer } from './styles'
import { InputNumber } from '../../../../components/InputNumber'

interface CoffeeType {
  type: string
}

export function CoffeeForm(props: CoffeeType) {
  return (
    <CoffeFormContainer>
      <img src={`/src/assets/coffee/${props.type}.png`} alt={props.type} />
      <p>Tradicional</p>
      <div className="description">
        <p>Expresso Tradicional</p>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </div>
      <div className="footer">
        <div className="value">
          <span>R$</span>
          9,90
        </div>
        <InputNumber size={3.8} />
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </CoffeFormContainer>
  )
}
