import { ChangeEvent, useState } from 'react'
import { InputTextContainer } from './styles'

interface InputTextProps {
  id: string
  name: string
  place: string
  value?: string
  isOptional?: boolean
  onGetAddress?: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

export function InputText({
  id,
  name,
  place,
  isOptional = false,
  onGetAddress,
  value,
}: InputTextProps) {
  const [optional, setOptional] = useState(isOptional)

  function handleChangeInfo(e: ChangeEvent<HTMLInputElement>) {
    e.target.value.length > 0 ? setOptional(false) : setOptional(isOptional)
  }

  return (
    <InputTextContainer id={id}>
      <input
        onChange={handleChangeInfo}
        onBlur={onGetAddress}
        type="text"
        name={name}
        placeholder={place}
        defaultValue={value}
      />
      <span>{optional ? 'Opcional' : ''}</span>
    </InputTextContainer>
  )
}
