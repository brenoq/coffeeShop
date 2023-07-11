import { useCart } from '../../../../hooks/useCart'
import { CoffeeFormSmall } from '../CoffeeFormSmall'
import { OrderSummaryContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function OrderSummary() {
  const delivery = DELIVERY_PRICE.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
  })
  const { cartItems, formattedTotalItems, fullPrice, cartQuantity } = useCart()

  return cartQuantity > 0 ? (
    <OrderSummaryContainer>
      <div className="header">
        <h1>Cafés selecionados</h1>
      </div>
      <div className="coffeeCard">
        <div className="main">
          {cartItems.map((cartItem) => (
            <CoffeeFormSmall
              key={cartItem.id}
              type={cartItem.photo}
              cartItem={cartItem}
            />
          ))}
          <div className="values">
            <div className="totalItems">
              Total dos itens
              <span>R$ {formattedTotalItems}</span>
            </div>
            <div className="delivery">
              Entrega
              <span>R$ {delivery}</span>
            </div>
            <div className="total">
              Total
              <span>R$ {fullPrice}</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button>CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </OrderSummaryContainer>
  ) : (
    <OrderSummaryContainer>
      <div className="header">
        <h1>Cafés selecionados</h1>
      </div>
      <div className="coffeeCardEmpty">
        <div>Nenhum café selecionado</div>
      </div>
    </OrderSummaryContainer>
  )
}
