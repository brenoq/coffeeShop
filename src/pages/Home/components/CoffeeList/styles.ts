import { styled } from 'styled-components'

export const CoffeListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3.2rem;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 5.4rem;
  }

  .cardList {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    flex-wrap: wrap;

    gap: 4rem 3.2rem;
  }
`
