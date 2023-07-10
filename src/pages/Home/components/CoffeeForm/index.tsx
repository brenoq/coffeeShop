import { ShoppingCart } from 'phosphor-react'
import { CoffeFormContainer } from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { Coffees } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export function CoffeeForm({
  id,
  tags,
  name,
  description,
  photo,
  price,
}: Coffees) {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeToAdd = {
      id,
      tags,
      name,
      description,
      photo,
      price,
      quantity,
    }

    addCoffeeToCart(coffeToAdd)
    setQuantity(1)
  }

  return (
    <CoffeFormContainer>
      <img src={`/src/assets/coffee/${photo}.png`} alt={photo} />
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
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
        <InputNumber
          size={3.8}
          quantity={quantity}
          onDecrease={handleDecreaseQuantity}
          onIncrease={handleIncreaseQuantity}
        />
        <button onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </CoffeFormContainer>
  )
}
