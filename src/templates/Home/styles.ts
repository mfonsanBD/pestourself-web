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
    width: 100%;
    position: absolute;
    max-width: ${theme.grid.container};
    background-color: ${theme.colors.white};
    bottom: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium};
    margin-bottom: -7rem;
    z-index: ${theme.layers.modal};

    .react-tabs__tab-list {
      list-style: none;
      display: flex;
      gap: 3rem;
      margin-bottom: ${theme.spacings.xsmall};
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
  padding: 18rem 0 12rem;
`

export const SectionParceiros = styled.section``
