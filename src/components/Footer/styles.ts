import { darken } from 'polished'
import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as ButtonStyles from 'components/Button/styles'

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
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }

    span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
    }

    ${ButtonStyles.Wrapper} {
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
    }

    a:hover {
      color: ${darken(0.2, theme.colors.white)};
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
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}

    p {
      margin: 0;
      padding: 0;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};

      ${media.lessThan('medium')`
        text-align: center;
      `}
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

export const Separator = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`

export const FooterTitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.primary};
  `}
`

export const UseTermsArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    margin: 1rem 0 2rem;

    a {
      display: inline-block;
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.primary};
      margin-bottom: 0;

      &:hover {
        color: ${darken(0.1, theme.colors.primary)};
      }
    }
  `}
`
