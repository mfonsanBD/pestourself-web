import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    position: relative;
    padding-top: 12rem;
    padding-bottom: 12rem;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
