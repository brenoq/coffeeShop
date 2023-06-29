import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { OrderFormContainer } from '../OrderForm/styles'
import { InputText } from '../../../../components/InputText'

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
          <InputText id="div1" name="cep" place="CEP" />
          <InputText id="div2" name="rua" place="Rua" />
          <InputText id="div3" name="numero" place="Número" />
          <InputText
            id="div4"
            name="complemento"
            place="Complemento"
            isOptional
          />
          <InputText id="div5" name="bairro" place="Bairro" />
          <InputText id="div6" name="cidade" place="Cidade" />
          <InputText id="div7" name="uf" place="UF" />
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
