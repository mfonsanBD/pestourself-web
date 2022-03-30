import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

const wrapperModifiers = {
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 6rem;
      display: inline-block;

      svg{
        height: 6rem;
        pointer-events: none;
      }

      .text{
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, hideOnMobile }) => css`
    width: 11rem;
    height: 5rem;

    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};

    svg {
      fill: ${theme.colors[color!]};
    }
  `}
`
