import { styled } from 'styled-components'

export const CoffeFormSmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 36.8rem;
  height: 8rem;

  padding: 0.8rem 0.4rem;

  background: ${(props) => props.theme['base-card']};

  .description {
    display: flex;
    flex-direction: row;

    gap: 2rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
    }

    .coffee {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.8rem;

      p {
        color: ${(props) => props.theme['base-subtitle']};

        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      }

      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.8rem;

        & > button {
          display: flex;
          height: 3.2rem;
          padding: 0.8rem 0.8rem;
          justify-content: center;
          align-items: center;
          gap: 0.4rem;

          border: none;
          border-radius: 0.6rem;
          background: ${(props) => props.theme['base-button']};
          color: ${(props) => props.theme.purple};

          cursor: pointer;

          & > span {
            color: ${(props) => props.theme['base-text']};

            font-size: 1.2rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 0;
          }

          transition: 300ms;
        }

        & > button:hover {
          background: ${(props) => props.theme['base-hover']};
        }
      }
    }
  }

  .value {
    color: ${(props) => props.theme['base-text']};

    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 130%;
  }
`

export const Divider = styled.hr`
  margin: 2.4rem auto;
  border-top: 1px solid ${(props) => props.theme['base-button']};
`
