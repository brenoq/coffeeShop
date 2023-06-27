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
          <MapPinLine />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>

        <div className="main">
          <input type="text" name="cep" placeholder="CEP" />
          <input type="text" name="rua" placeholder="Rua" />
          <input type="text" name="numero" placeholder="Número" />
          <input type="text" name="complemento" placeholder="Complemento" />
          <input type="text" name="bairro" placeholder="Bairro" />
          <input type="text" name="cidade" placeholder="Cidade" />
          <input type="text" name="uf" placeholder="UF" />
        </div>
      </div>

      <div className="payment">
        <div className="header">
          <CurrencyDollar />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>

        <div className="main">
          <button>
            <CreditCard />
            CARTÃO DE CRÉDITO
          </button>
          <button>
            <Bank />
            CARTÃO DE DÉBITO
          </button>
          <button>
            <Money />
            DINHEIRO
          </button>
        </div>
      </div>
    </OrderFormContainer>
  )
}
