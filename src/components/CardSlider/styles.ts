import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  isAdvertiser: boolean
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, isAdvertiser }) => css`
    overflow-x: hidden;

    ${media.greaterThan('medium')`
      padding-top: 3rem;
      height: ${isAdvertiser ? '44rem' : '52rem'};
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide img {
      display: inline-block;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
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
