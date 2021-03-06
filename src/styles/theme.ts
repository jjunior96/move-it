export default {
  grid: {
    container: '96rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  box: {
    shadow: '0 8px 8px #eee'
  },
  font: {
    light: 300,
    normal: 400,
    semiBold: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
      huge: '5.2rem',
      xhuge: '9rem'
    }
  },
  colors: {
    white: '#fff',
    background: '#f2f3f5',
    grayLine: '#dcdde0',
    text: '#666',
    textHighlight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0'
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
  }
} as const;
