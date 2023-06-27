import { OrderForm } from './components/OrderForm'
import { OrderSummary } from './components/OrderSummary'

import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <OrderForm />
      <OrderSummary />
    </CartContainer>
  )
}
