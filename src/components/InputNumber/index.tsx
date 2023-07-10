import { Minus, Plus } from 'phosphor-react'
import { InputContainer } from './styles'

interface InputNumberProps {
  size: number
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function InputNumber({
  quantity,
  onIncrease,
  onDecrease,
  size,
}: InputNumberProps) {
  return (
    <InputContainer size={size}>
      <button disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="bold" id="minus" />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus size={14} weight="bold" id="plus" />
      </button>
    </InputContainer>
  )
}
