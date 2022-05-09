import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  `}
`

export const LocationHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const TotalPartners = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
  `}
`

export const LocationFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const LocationName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: calc(${theme.font.sizes.xlarge} + 0.4rem);
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 43.4rem;
    overflow: hidden;
    border-radius: ${theme.border.radius};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }

    &::after {
      content: '';
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: background 0.3s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      &::after {
        background: rgba(0, 0, 0, 0);
      }
    }
  `}
`
