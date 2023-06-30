import { styled } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 4px;

  width: 7.2rem;
  height: 3.8rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  margin-left: 2.3rem;

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
