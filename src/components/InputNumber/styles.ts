import { styled } from 'styled-components'

interface inputVariants {
  size: number
}

export const InputContainer = styled.div<inputVariants>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 4px;

  width: 7.2rem;
  height: ${(props) => props.size}rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;

    color: ${(props) => props.theme['base-title']};

    background: none;
    border: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;

    color: ${(props) => props.theme.purple};

    cursor: pointer;

    transition: 300ms;
  }

  button:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
