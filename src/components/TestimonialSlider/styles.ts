import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow-x: hidden;

    ${media.greaterThan('medium')`
      padding-top: 3rem;
      height: 39rem;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide img {
      display: inline-block;
    }

    .slick-slide > div {
      margin: 0 auto;
      flex: 1 0 auto;
      height: 100%;
      width: 80%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 auto;
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      cursor: pointer;
      position: absolute;
      border: none;
      top: -1rem;
      padding: 0.5rem 1rem;
      transform: translate(0, -50%);
      height: 2.2rem;
    }

    .slick-prev {
      top: -2rem;
      right: 5.5rem;
    }

    .slick-next {
      top: -2rem;
      right: 0;
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
