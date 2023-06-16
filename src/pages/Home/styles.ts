import { styled } from 'styled-components'

interface tagVariants {
  variant: string
}

export const HomeContainer = styled.section`
  padding: 0 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  .bannerBg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100%;

    filter: blur(88px);
  }

  .banner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 9.4rem;

    h1 {
      width: 58.8rem;
      height: 12.4rem;

      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 4.8rem;

      color: ${(props) => props.theme['base-title']};

      align-self: stretch;
    }

    p {
      width: 58.8rem;
      height: 5.2rem;
      margin-top: 1.6rem;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 2rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};

      align-self: stretch;
    }

    .benefits {
      width: 58.8rem;
      display: grid;
      margin-top: 6.6rem;

      grid-template-columns: repeat(auto-fit, minmax(23.1rem, 29.4rem));
      grid-template-rows: 3.2rem 3.2rem;
      row-gap: 2rem;
    }

    img {
      height: 36rem;
      margin-left: 5.6rem;
    }
  }
`

export const TagContainer = styled.div<tagVariants>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    background-color: ${(props) => props.theme[props.variant]};
    border-radius: 1000px;
    padding: 0.8rem;
    color: ${(props) => props.theme.background};
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`
