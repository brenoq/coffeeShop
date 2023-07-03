import { CoffeeFormSmall } from '../CoffeeFormSmall'
import { OrderSummaryContainer } from './styles'

export function OrderSummary() {
  return (
    <OrderSummaryContainer>
      <div className="header">
        <h1>Cafés selecionados</h1>
      </div>
      <div className="coffeeCard">
        <div className="main">
          <CoffeeFormSmall type="expresso" />
          <CoffeeFormSmall type="capuccino" />
          <div className="values">
            <div className="totalItems">
              Total dos itens
              <span>R$ 29,70</span>
            </div>
            <div className="delivery">
              Entrega
              <span>R$ 3,50</span>
            </div>
            <div className="total">
              Total
              <span>R$ 33,20</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button>CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </OrderSummaryContainer>
  )
}
