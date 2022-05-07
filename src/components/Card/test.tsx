import { render, screen } from '@testing-library/react'

import Card from '.'

const props = {
  id: '1',
  cover: '/img/card-cover.png',
  photo: '/img/user-photo.jpg',
  name: 'User Name',
  slug: 'user-name',
  shortDescription: 'This is the user short description',
  isAdvertiser: false,
  initialPrice: 30,
  finalPrice: 120,
  city: 'Itaboraí',
  state: 'RJ',
  country: 'Brasil',
  categories: ['Pet Sitter', 'Dog Walker'],
  gallery: [
    {
      src: '/img/games/cyberpunk-1.jpg',
      label: 'Gallery Image 1'
    },
    {
      src: '/img/games/cyberpunk-2.jpg',
      label: 'Gallery Image 2'
    },
    {
      src: '/img/games/cyberpunk-3.jpg',
      label: 'Gallery Image 3'
    },
    {
      src: '/img/games/cyberpunk-4.jpg',
      label: 'Gallery Image 4'
    },
    {
      src: '/img/games/cyberpunk-5.jpg',
      label: 'Gallery Image 5'
    },
    {
      src: '/img/games/cyberpunk-6.jpg',
      label: 'Gallery Image 6'
    }
  ],
  rating: 4.6
}

describe('<Card />', () => {
  it('should render the heading', () => {
    render(<Card {...props} />)

    expect(screen.getByText(/user name/i)).toBeInTheDocument()
  })
})
