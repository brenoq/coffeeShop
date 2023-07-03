import { Trash } from 'phosphor-react'
import { CoffeFormSmallContainer, Divider } from './styles'
import { InputNumber } from '../../../../components/InputNumber'

interface CoffeeType {
  type: string
}

export function CoffeeFormSmall(props: CoffeeType) {
  return (
    <>
      <CoffeFormSmallContainer>
        <div className="description">
          <img src={`/src/assets/coffee/${props.type}.png`} alt={props.type} />
          <div className="coffee">
            <p>Expresso Tradicional</p>
            <div>
              <InputNumber size={3.2} />
              <button>
                <Trash size={16} />
                <span>REMOVER</span>
              </button>
            </div>
          </div>
        </div>
        <div className="value">R$ 9,90</div>
      </CoffeFormSmallContainer>
      <Divider />
    </>
  )
}
