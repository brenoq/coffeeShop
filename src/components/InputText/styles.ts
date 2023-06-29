import { styled } from 'styled-components'

export const InputTextContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 4.2rem;
    border-radius: 4px;
    padding: 1.2rem;

    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-label']};
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
  }

  input:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  span {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    right: 1.2rem;

    color: ${(props) => props.theme['base-label']};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
  }
`
