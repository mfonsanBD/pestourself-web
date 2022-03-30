export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.3rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#FEAE11',
    background: '#F5F6FA',
    white: '#FFFFFF',
    lightGray: '#DDDDDD',
    mediumGray: '#AAAAAA',
    darkGray: '#212121',
    title: '#495057',
    inputbg: '#EAEAEA',
    inputph: '#8F8F8F',
    footerbg: '#323232',
    responses: {
      danger: '#DC3545',
      sucess: '#198754',
      warning: '#FF8F00'
    },
    ratings: {
      verygood: '#3ECE7E',
      average: '#F4B34D',
      good: '#97C47F',
      poor: '#ED9361',
      terrible: '#E46D78'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
