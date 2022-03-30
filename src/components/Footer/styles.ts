import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'
import { darken } from 'polished'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

const Margens = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`

export const Content = styled(Margens)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.darkGray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const RowData = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: 2rem 0;
    gap: 1rem;

    svg {
      fill: ${theme.colors.primary};
    }
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    h3 {
      margin: 0;
      padding: 0;
      color: ${theme.colors.white};
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      color: ${theme.colors.white};
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.medium} 0;
    border-top: thin solid ${theme.colors.lightGray};
  `}
`

export const Div = styled(Margens)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin: 0;
      padding: 0;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;

      &:hover {
        color: ${darken(0.1, theme.colors.primary)};
      }
    }
  `}
`
