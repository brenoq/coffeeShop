import { styled } from 'styled-components'

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;

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
    }

    .main {
    }
  }

  .payment {
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
    }
  }
`
