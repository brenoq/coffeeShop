import { styled } from 'styled-components'

interface tagVariants {
  variant: string
}

export const OrderContainer = styled.div`
  padding: 0 16rem;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  .orderInfo {
    & > h1 {
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 3.2rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
    }

    & > p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 2rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }

    .infoDetail {
      display: flex;
      flex-direction: column;
      padding: 4rem;
      gap: 3.2rem;
      margin-top: 4rem;

      border-radius: 6px 36px;
      background: ${(props) => props.theme.background};

      position: relative;

      &::before {
        content: '';
        position: absolute;
        inset: -1px;
        z-index: -1;
        border-radius: 6px 36px;
        background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
      }

      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 1.2rem;

        color: ${(props) => props.theme['base-text']};
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }

  .orderImg {
    width: 49.2rem;
    height: 29.3rem;
    transform: translateY(1.31rem);
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
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`
