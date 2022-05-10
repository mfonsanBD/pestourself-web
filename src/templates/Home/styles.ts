import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Cover = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
  }

  img {
    object-fit: cover;
    object-position: center 35%;
  }

  ${media.greaterThan('medium')`
    height: 44.1rem;
  `}
`

export const Filters = styled.div`
  ${({ theme }) => css`
    width: 91.5%;
    position: absolute;
    max-width: ${theme.grid.container};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    bottom: 0;
    border-radius: ${theme.border.radius};
    margin-bottom: -7rem;
    z-index: calc(${theme.layers.menu} - 1);

    ${media.greaterThan('medium')`
      width: 100%;
      padding: ${theme.spacings.medium};
    `}

    .react-tabs__tab-list {
      list-style: none;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      margin-bottom: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        justify-content: flex-start;
        gap: 3rem;
      `}
    }

    .react-tabs__tab {
      color: ${theme.colors.title};
      outline: none;
      cursor: pointer;
      font-weight: ${theme.font.bold};
    }

    .react-tabs__tab--selected {
      border-bottom: 3px solid ${theme.colors.primary};
    }
  `}
`

export const Main = styled.main`
  position: relative;
`

const Section = styled.section`
  ${({ theme }) => css`
    padding-top: 12rem;
    padding-bottom: 12rem;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`

export const SectionParceiros = styled(Section)`
  margin: 6rem 0 0;
`

export const SectionLocais = styled(Section)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const SectionAnunciantes = styled(Section)``

export const SectionComoFunciona = styled(Section)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const Infos = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`
