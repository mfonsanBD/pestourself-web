import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

type WrapperProps = Pick<HeadingProps, 'color' | 'size' | 'backTitle' | 'align'>

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    h2 {
      font-size: ${theme.font.sizes.medium};
    }
  `,

  medium: (theme: DefaultTheme) => css`
    h2 {
      font-size: calc(${theme.font.sizes.xlarge} + 0.4rem);

      &::after {
        margin-top: -1.5rem;
        font-size: calc(${theme.font.sizes.xlarge} * 1.7);
      }
    }
  `,

  large: (theme: DefaultTheme) => css`
    h2 {
      font-size: calc(${theme.font.sizes.xlarge} + 1.6rem);

      &::after {
        margin-top: -2rem;
        font-size: ${theme.font.sizes.huge};

        ${media.lessThan('medium')`
          font-size: calc(${theme.font.sizes.huge} - 1rem) ;
        `}
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size, backTitle, align }) => css`
    text-align: ${align};
    line-height: 1;
    margin-bottom: 8rem;
    ${!!size && wrapperModifiers[size](theme)}

    h2 {
      color: ${theme.colors[color!]};
      padding: 0;
      margin: 0;
      position: relative;

      &::after {
        content: '${backTitle}';
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0.1;
      }
    }

    p {
      font-size: ${theme.font.sizes.medium};
      margin-top: 1rem;
      color: ${color === 'white'
        ? theme.colors.white
        : theme.colors.mediumGray};
    }
  `}
`
