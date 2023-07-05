import orderImg from '../../assets/illustration.png'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderContainer, TagContainer } from './styles'

export function Order() {
  return (
    <OrderContainer>
      <div className="orderInfo">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className="infoDetail">
          <div>
            <TagContainer variant="purple">
              <MapPin size={32} />
            </TagContainer>
            <div>
              <span>Entrega em </span>
              <strong>Rua João Daniel Martinelli, 102</strong>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <TagContainer variant="yellow">
              <Timer size={32} />
            </TagContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min. - 30 min.</strong>
            </div>
          </div>
          <div>
            <TagContainer variant="yellow-dark">
              <CurrencyDollar size={32} />
            </TagContainer>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="orderImg">
        <img src={orderImg} alt="pedido enviado de moto" />
      </div>
    </OrderContainer>
  )
}
