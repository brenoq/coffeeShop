import { Minus, Plus } from 'phosphor-react'
import { InputContainer } from './styles'
import { useState } from 'react'

export function InputNumber() {
  const [quantity, setQuantity] = useState(1)

  function handleChangeQuantity(buttonType: string) {
    if (buttonType === 'plus') {
      setQuantity(quantity + 1)
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    }
  }

  return (
    <InputContainer>
      <button onClick={() => handleChangeQuantity('minus')}>
        <Minus size={14} weight="bold" id="minus" />
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleChangeQuantity('plus')}>
        <Plus size={14} weight="bold" id="plus" />
      </button>
    </InputContainer>
  )
}
