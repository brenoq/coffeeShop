import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, TagContainer } from './styles'

import bannerImg from '../../assets/bannerImg.png'
import bannerBg from '../../assets/bannerBackground.svg'

import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <img className="bannerBg" src={bannerBg} alt="" />
      <div className="banner">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="benefits">
            <TagContainer variant="yellow-dark">
              <ShoppingCart className="icon" size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </TagContainer>
            <TagContainer variant="base-text">
              <Package size={16} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </TagContainer>
            <TagContainer variant="yellow">
              <Timer size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </TagContainer>
            <TagContainer variant="purple">
              <Coffee size={16} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </TagContainer>
          </div>
        </div>
        <img src={bannerImg} alt="Copo de café" />
      </div>

      <CoffeeList />
    </HomeContainer>
  )
}
