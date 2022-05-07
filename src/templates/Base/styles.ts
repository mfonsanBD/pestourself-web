import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.footerbg};

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
    `}
  `}
`

export const SectionMenu = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`
