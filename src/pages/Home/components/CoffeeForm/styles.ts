import { styled } from 'styled-components'

export const CoffeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 25.6rem;
  height: 31rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    height: 12rem;
    margin-top: -2rem;
  }

  & > p {
    padding: 4px 8px;
    margin-top: 1.2rem;

    width: 81px;
    height: 21px;

    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;

    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    margin-top: 1.6rem;

    p {
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      font-size: 20px;

      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      padding: 0 2rem;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.4rem;

      text-align: center;

      color: ${(props) => props.theme['base-label']};
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 3.3rem;

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem;
      margin-left: 0.8rem;

      background: none;
      border: none;

      width: 3.8rem;
      height: 3.8rem;

      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['base-card']};

      border-radius: 6px;
    }

    .value {
      text-align: right;

      color: ${(props) => props.theme['base-text']};

      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 2.4rem;

      span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;

        margin-right: 0.5rem;
      }
    }
  }
`
