import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const MessageBox = styled.div`
  text-align: center;
  svg {
    opacity: 0.1;
  }
`

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.font.sizes.large};
    margin-top: -4rem;
    margin-bottom: 4rem;
  `}
`

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 0.5rem;
`

export const ClientPhoto = styled.div`
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

export const ClientData = styled.div`
  ${({ theme }) => css`
    h3 {
      color: ${theme.colors.title};
      padding: 0;
      margin: 0;
    }
    small {
      color: ${theme.colors.mediumGray};
      padding: 0;
      margin: 0;
    }
  `}
`
