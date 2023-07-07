import { ShoppingCart } from 'phosphor-react'
import { CoffeFormContainer } from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { Coffees } from '../../../../context/CartContext'

export function CoffeeForm({
  id,
  tags,
  name,
  description,
  photo,
  price,
}: Coffees) {
  return (
    <CoffeFormContainer>
      <img src={`/src/assets/coffee/${photo}.png`} alt={photo} />
      <div className="tags">
        {tags.map((tag) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
      <div className="description">
        <p>{name}</p>
        <span>{description}</span>
      </div>
      <div className="footer">
        <div className="value">
          <span>R$</span>
          {price.toLocaleString('pt-br', {
            style: 'decimal',
            minimumFractionDigits: 2,
          })}
        </div>
        <InputNumber size={3.8} />
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </CoffeFormContainer>
  )
}
