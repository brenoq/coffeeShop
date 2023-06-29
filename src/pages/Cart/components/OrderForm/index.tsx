import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { OrderFormContainer } from '../OrderForm/styles'

export function OrderForm() {
  return (
    <OrderFormContainer>
      <h1>Complete seu pedido</h1>

      <div className="address">
        <div className="header">
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>

        <div className="main">
          <input id="div1" type="text" name="cep" placeholder="CEP" />
          <input id="div2" type="text" name="rua" placeholder="Rua" />
          <input id="div3" type="text" name="numero" placeholder="Número" />
          <input
            id="div4"
            type="text"
            name="complemento"
            placeholder="Complemento"
          />
          <input id="div5" type="text" name="bairro" placeholder="Bairro" />
          <input id="div6" type="text" name="cidade" placeholder="Cidade" />
          <input id="div7" type="text" name="uf" placeholder="UF" />
        </div>
      </div>

      <div className="payment">
        <div className="header">
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>

        <div className="main">
          <div>
            <input type="radio" name="payment" id="credit" />
            <label htmlFor="credit">
              <CreditCard size={16} /> CARTÃO DE CRÉDITO
            </label>
          </div>
          <div>
            <input type="radio" name="payment" id="bank" />
            <label htmlFor="bank">
              <Bank size={16} /> CARTÃO DE DÉBITO
            </label>
          </div>
          <div>
            <input type="radio" name="payment" id="money" />
            <label htmlFor="money">
              <Money size={16} /> DINHEIRO
            </label>
          </div>
        </div>
      </div>
    </OrderFormContainer>
  )
}
