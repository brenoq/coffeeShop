import { ChangeEvent, useState } from 'react'
import { InputTextContainer } from './styles'

interface InputTextProps {
  id: string
  name: string
  place: string
  isOptional?: boolean
}

export function InputText({
  id,
  name,
  place,
  isOptional = false,
}: InputTextProps) {
  const [optional, setOptional] = useState(isOptional)

  function handleChangeInfo(e: ChangeEvent<HTMLInputElement>) {
    e.target.value.length > 0 ? setOptional(false) : setOptional(isOptional)
  }

  return (
    <InputTextContainer id={id}>
      <input
        onChange={handleChangeInfo}
        type="text"
        name={name}
        placeholder={place}
      />
      <span>{optional ? 'Opcional' : ''}</span>
    </InputTextContainer>
  )
}
