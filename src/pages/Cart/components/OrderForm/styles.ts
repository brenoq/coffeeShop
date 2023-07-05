import { styled } from 'styled-components'

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 64rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.8rem;
    font-family: 'Baloo 2', cusrsive;
    font-weight: 700;

    margin: 4rem 0 1.5rem 0;
  }

  .address {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    padding: 4rem;

    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};

    .header {
      display: flex;
      flex-direction: row;
      gap: 0.8rem;

      color: ${(props) => props.theme['yellow-dark']};

      div {
        p {
          color: ${(props) => props.theme['base-subtitle']};

          font-size: 1.6rem;
          font-family: 'Roboto', sans-serif;
          display: block;
          height: 2.1rem;
        }

        span {
          color: ${(props) => props.theme['base-text']};

          font-size: 1.4rem;
          font-family: 'Roboto', sans-serif;
          display: block;
          height: 2.1rem;
        }
      }
    }

    .main {
      display: grid;
      grid-template-columns: 20rem 27.6rem 6rem;
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 16px;

      #div1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      #div2 {
        grid-area: 2 / 1 / 3 / 4;
      }
      #div3 {
        grid-area: 3 / 1 / 4 / 2;
      }
      #div4 {
        grid-area: 3 / 2 / 4 / 4;
      }
      #div5 {
        grid-area: 4 / 1 / 5 / 2;
      }
      #div6 {
        grid-area: 4 / 2 / 5 / 3;
      }
      #div7 {
        grid-area: 4 / 3 / 5 / 4;
      }
    }
  }

  .payment {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-bottom: 3.2rem;

    padding: 4rem;

    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};

    .header {
      display: flex;
      flex-direction: row;
      gap: 0.8rem;

      color: ${(props) => props.theme.purple};

      div {
        p {
          color: ${(props) => props.theme['base-subtitle']};

          font-size: 1.6rem;
          font-family: 'Roboto', sans-serif;
          display: block;
          height: 2.1rem;
        }

        span {
          color: ${(props) => props.theme['base-text']};

          font-size: 1.4rem;
          font-family: 'Roboto', sans-serif;
          display: block;
          height: 2.1rem;
        }
      }
    }

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      input {
        display: none;
      }

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.6rem;
        gap: 1.2rem;

        width: 17.8rem;
        height: 5.1rem;

        border-radius: 6px;
        background: ${(props) => props.theme['base-button']};

        color: ${(props) => props.theme['base-text']};
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        line-height: 160%;

        cursor: pointer;

        transition: 300ms;

        svg {
          color: ${(props) => props.theme.purple};
        }
      }

      label:hover {
        background: ${(props) => props.theme['base-hover']};
      }

      input:checked + label {
        border: 1px solid ${(props) => props.theme.purple};
        background: ${(props) => props.theme['purple-light']};
      }
    }
  }
`
