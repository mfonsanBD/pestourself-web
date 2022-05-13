import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'

export const Wrapper = styled.div``

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

export const SectionYouKnow = styled(Section)``

export const YouKnowArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${media.lessThan('medium')`
    padding-bottom: 35rem;
  `}
`

export const ImageBox = styled.div`
  width: 110.2rem;
  height: 83.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.lessThan('medium')`
    width: 100%;
    height: 28rem;
  `}
`

export const YouKnowTextArea = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 50%;
    right: 0;
    padding: 3rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    ${media.lessThan('medium')`
      width: 95%;
      top: 20rem;
      left: 50%;
      transform: translateX(-50%);
    `}

    h2 {
      color: ${theme.colors.title};
    }

    p {
      color: ${theme.colors.mediumGray};
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};

      &:hover {
        color: ${darken(0.1, theme.colors.primary)};
      }
    }
  `}
`

export const SectionValues = styled(Section)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`

export const SectionAboutUs = styled(Section)``

export const AboutArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 5rem;

    ${media.lessThan('medium')`
      flex-direction: column;
      gap: 2rem;
    `}

    p {
      color: ${theme.colors.mediumGray};
      text-align: justify;
    }
  `}
`

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

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`
