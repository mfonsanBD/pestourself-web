import styled from 'styled-components'
import media from 'styled-media-query'

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;

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
