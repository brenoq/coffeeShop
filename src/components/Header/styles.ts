import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 3.2rem 16rem;

  background: ${(props) => props.theme.background};

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

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

      position: relative;

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;

        position: absolute;
        right: calc(-2rem / 2);
        top: calc(-2rem / 2);

        background: ${(props) => props.theme['yellow-dark']};
        border-radius: 50%;

        color: ${(props) => props.theme.white};
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        line-height: 0;
        font-weight: 700;
      }
    }
  }
`
