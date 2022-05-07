import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Cover = styled.a`
  ${({ theme }) => css`
    width: 100%;
    height: 19.4rem;
    position: relative;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8,
      100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    z-index: 1;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const ProfilePhoto = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    outline: 3px solid ${theme.colors.white};
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: -2rem;
    left: 1.2rem;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const CardContent = styled.div`
  margin: 3rem 0 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
`

export const Name = styled.a`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.xlarge} + 0.4rem);
    color: ${theme.colors.title};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    transition: all 0.3 ease-in-out;

    &:hover {
      color: ${darken(0.1, theme.colors.title)};
    }
  `}
`

export const Description = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.mediumGray};
    margin-top: -0.5rem;
  `}
`

export const PriceRange = styled.div`
  margin: 0 0 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
`

export const RangeTitle = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const Prices = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};
    }

    svg {
      color: ${theme.colors.lightGray};
    }
  `}
`

export const LocationArea = styled.div`
  ${({ theme }) => css`
    margin: 0 0 2rem;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.title};
  `}
`

export const Location = styled.small``

export const CardFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-top: thin solid ${theme.colors.background};

    svg {
      color: ${theme.colors.title};
    }
  `}
`

export const Categories = styled.small`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.colors.title};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`
