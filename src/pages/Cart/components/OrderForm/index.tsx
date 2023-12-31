import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { OrderFormContainer } from '../OrderForm/styles'
import { InputText } from '../../../../components/InputText'
import { useCart } from '../../../../hooks/useCart'

export function OrderForm() {
  const { address, handleGetAddress, handleSelectPayment } = useCart()

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
          <InputText
            onGetAddress={handleGetAddress}
            id="div1"
            name="cep"
            place="CEP"
            value={address?.cep}
          />
          <InputText
            id="div2"
            name="rua"
            place="Rua"
            value={address?.logradouro}
          />
          <InputText
            onGetAddress={handleGetAddress}
            id="div3"
            name="numero"
            place="Número"
            value={address?.numero}
          />
          <InputText
            onGetAddress={handleGetAddress}
            id="div4"
            name="complemento"
            place="Complemento"
            value={address?.complemento}
            isOptional
          />
          <InputText
            id="div5"
            name="bairro"
            place="Bairro"
            value={address?.bairro}
          />
          <InputText
            id="div6"
            name="cidade"
            place="Cidade"
            value={address?.localidade}
          />
          <InputText id="div7" name="uf" place="UF" value={address?.uf} />
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
            <input
              onClick={handleSelectPayment}
              type="radio"
              name="payment"
              id="credit"
              defaultChecked={address?.pagamento === 'Cartão de Crédito'}
            />
            <label htmlFor="credit">
              <CreditCard size={16} /> CARTÃO DE CRÉDITO
            </label>
          </div>
          <div>
            <input
              onClick={handleSelectPayment}
              type="radio"
              name="payment"
              id="bank"
              defaultChecked={address?.pagamento === 'Cartão de Débito'}
            />
            <label htmlFor="bank">
              <Bank size={16} /> CARTÃO DE DÉBITO
            </label>
          </div>
          <div>
            <input
              onClick={handleSelectPayment}
              type="radio"
              name="payment"
              id="money"
              defaultChecked={address?.pagamento === 'Dinheiro'}
            />
            <label htmlFor="money">
              <Money size={16} /> DINHEIRO
            </label>
          </div>
        </div>
      </div>
    </OrderFormContainer>
  )
}
