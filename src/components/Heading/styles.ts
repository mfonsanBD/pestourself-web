import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

type WrapperProps = Pick<HeadingProps, 'color' | 'size' | 'backTitle' | 'align'>

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: 2.4rem;

    h2::after {
      margin-top: -2rem;
      font-size: ${theme.font.sizes.huge};
    }
  `,

  large: (theme: DefaultTheme) => css`
    font-size: 3.6rem;

    h2::after {
      margin-top: -3rem;
      font-size: calc(${theme.font.sizes.huge} * 1.5);
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size, backTitle, align }) => css`
    text-align: ${align};
    line-height: 1;

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
        ${!!size && wrapperModifiers[size](theme)}
      }
    }

    p {
      font-size: ${theme.font.sizes.medium};
      color: ${color === 'white'
        ? theme.colors.white
        : theme.colors.mediumGray};
    }
  `}
`
