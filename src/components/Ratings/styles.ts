import styled, { css } from 'styled-components'
import { RatingsProps } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 15rem;
    padding: ${theme.spacings.xxsmall};
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    z-index: 2;
  `}
`

export const NumberRating = styled.div<RatingsProps>`
  ${({ theme, rating }) => css`
    font-size: calc(${theme.font.sizes.xxlarge} + 1.8rem);
    font-weight: ${theme.font.bold};
    letter-spacing: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;

    color: ${rating > 0 && rating <= 1
      ? theme.colors.ratings.terrible
      : rating > 1 && rating <= 2
      ? theme.colors.ratings.poor
      : rating > 2 && rating <= 3
      ? theme.colors.ratings.average
      : rating > 3 && rating <= 4
      ? theme.colors.ratings.good
      : rating > 4 && theme.colors.ratings.verygood};
  `}
`

export const TotalAndMessage = styled.div<RatingsProps>`
  ${({ theme, rating }) => css`
    display: flex;
    flex-direction: column;
    color: ${rating > 0 && rating <= 1
      ? theme.colors.ratings.terrible
      : rating > 1 && rating <= 2
      ? theme.colors.ratings.poor
      : rating > 2 && rating <= 3
      ? theme.colors.ratings.average
      : rating > 3 && rating <= 4
      ? theme.colors.ratings.good
      : rating > 4 && theme.colors.ratings.verygood};

    span {
      font-size: ${theme.font.sizes.small};
    }
    small {
      font-size: ${theme.font.sizes.xsmall};
      letter-spacing: -0.5px;
      margin-top: -0.5rem;
    }
  `}
`
