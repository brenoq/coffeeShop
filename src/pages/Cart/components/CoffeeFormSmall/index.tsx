import { Trash } from 'phosphor-react'
import { CoffeFormSmallContainer, Divider } from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { CartItem } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeType {
  type: string
  cartItem: CartItem
}

export function CoffeeFormSmall({ type, cartItem }: CoffeeType) {
  const totalPrice = cartItem.price * cartItem.quantity
  const formatedPrice = totalPrice.toLocaleString('pt-br', {
    style: 'decimal',
    minimumFractionDigits: 2,
  })

  const { changeCartItemQuantity, removeCoffeeFromCart } = useCart()

  function handleIncreaseQuantity() {
    changeCartItemQuantity(cartItem.id, 'increase')
  }

  function handleDecreaseQuantity() {
    changeCartItemQuantity(cartItem.id, 'decrease')
  }

  function handleRemoveCoffee() {
    removeCoffeeFromCart(cartItem.id)
  }

  return (
    <>
      <CoffeFormSmallContainer>
        <div className="description">
          <img src={`/src/assets/coffee/${type}.png`} alt={type} />
          <div className="coffee">
            <p>{cartItem.name}</p>
            <div>
              <InputNumber
                quantity={cartItem.quantity}
                onDecrease={handleDecreaseQuantity}
                onIncrease={handleIncreaseQuantity}
                size={3.2}
              />
              <button onClick={handleRemoveCoffee}>
                <Trash size={16} />
                <span>REMOVER</span>
              </button>
            </div>
          </div>
        </div>
        <div className="value">R$ {formatedPrice}</div>
      </CoffeFormSmallContainer>
      <Divider />
    </>
  )
}
