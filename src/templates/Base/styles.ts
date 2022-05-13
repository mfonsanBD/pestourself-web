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

type SectionMenuProps = {
  color?: 'white' | 'primary'
}

export const SectionMenu = styled.section<SectionMenuProps>`
  ${({ color }) => css`
    width: 100%;
    height: ${color === 'white' ? '11.4rem' : 0};
    display: flex;
    justify-content: center;

    ${media.lessThan('medium')`
      height: ${color === 'white' ? '8rem' : 0};
    `}
  `}
`
