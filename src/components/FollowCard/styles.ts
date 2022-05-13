import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `}
`

export const PhotoArea = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`

export const UserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      color: ${theme.colors.title};
    }

    small {
      color: ${theme.colors.mediumGray};
    }
  `}
`

export const FollowArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      color: ${theme.colors.mediumGray};
    }

    span {
      color: ${theme.colors.primary};
    }
  `}
`
