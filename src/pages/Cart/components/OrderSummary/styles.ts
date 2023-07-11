import { styled } from 'styled-components'

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 44.8rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.8rem;
    font-family: 'Baloo 2', cusrsive;
    font-weight: 700;

    margin: 4rem 0 1.5rem 0;
  }

  .coffeeCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 4rem;

    border-radius: 0.6rem 4.4rem;
    background: var(--base-card, #f3f2f2);

    .main > .values {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 1.2rem;

      margin-bottom: 2.4rem;

      & div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;
      }

      & div {
        color: ${(props) => props.theme['base-text']};

        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        span {
          color: ${(props) => props.theme['base-text']};

          font-size: 1.6rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        }
      }

      & div:last-child {
        color: ${(props) => props.theme['base-subtitle']};

        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;

        span {
          color: ${(props) => props.theme['base-subtitle']};

          font-size: 2rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
        }
      }
    }

    .footer {
      width: 100%;

      button {
        width: 100%;

        padding: 1.2rem 0.8rem;

        border: none;
        border-radius: 0.6rem;

        background: ${(props) => props.theme.yellow};

        color: ${(props) => props.theme.white};
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        line-height: 160%;

        cursor: pointer;

        transition: 300ms;
      }

      button:hover {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  .coffeeCardEmpty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 4rem;

    border-radius: 0.6rem 4.4rem;
    background: var(--base-card, #f3f2f2);

    color: ${(props) => props.theme['base-label']};

    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`
