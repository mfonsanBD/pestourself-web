import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 29.1rem;
    height: 25.2rem;
    background-color: ${theme.colors.background};
    padding: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${theme.border.radius};
  `}
`

export const IconBox = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};

    svg {
      color: ${theme.colors.white};
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const Description = styled.small`
  color: #6d6d6d;
`
