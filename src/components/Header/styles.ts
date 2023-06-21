import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 3.2rem 16rem;

  img {
    height: 4rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    padding: 0;

    div {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;

      padding: 0.8rem;

      background: ${(props) => props.theme['purple-light']};
      border-radius: 6px;

      font-size: 1.4rem;
      color: ${(props) => props.theme['purple-dark']};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.8rem;

      background: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;

      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
