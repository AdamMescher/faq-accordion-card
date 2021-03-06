const theme = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    huge: '1900px',
  },
  borders: {
    rounded: {
      none: 0,
      sm: '0.125em',
      rounded: '0.25em',
      md: '0.375em',
      lg: '0.5rem',
      xl: '0.75rem',
      xl2: '1rem',
      xl3: '1.5rem',
      full: '9999px',
    },
    width: {
      b0: 0,
      b1: '1px',
      b2: '2px',
      b4: '4px',
      b8: '8px',
    },
  },
  colors: {
    primary: {
      darkDesaturatedBlue: 'hsl(238, 29%, 16%)',
      softRed: 'hsl(14, 88%, 65%)',
    },
    gradient: {
      softViolet: 'hsl(273, 75%, 66%)',
      softBlue: 'hsl(240, 73%, 65%)',
    },
    neutral: {
      veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
      darkGrayishBlue: 'hsl(240, 6%, 50%)',
      lightGrayishBlue: 'hsl(240, 5%, 91%)',
      white: '#fff',
    },
  },
  typography: {
    fontFamily: `'Kumbh Sans', sans-serif`,
    weights: {
      regular: 400,
      bold: 700,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '12px',
      lg: '1.125rem',
      xl: '1.25rem',
      xl2: '1.5rem',
      xl3: '1.875rem',
      xl4: '2.25rem',
      xl5: '3rem',
      xl6: '4rem',
    },
  },
  spacing: {
    px: '1px',
    sp0: 0,
    sp1: '0.25rem',
    sp2: '0.5rem',
    sp3: '0.75rem',
    sp4: '1rem',
    sp5: '1.25rem',
    sp6: '1.5rem',
    sp8: '2rem',
    sp10: '2.5rem',
    sp12: '3rem',
    sp16: '4rem',
    sp20: '5rem',
    sp24: '6rem',
    sp32: '8rem',
    sp40: '10rem',
    sp48: '12rem',
    sp56: '14rem',
    sp64: '16rem',
  },
  boxShadow: {
    none: 'none',
    xs: '0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)',
    sm: '0 3px 6px rgba(0,0,0,.15), 0 2px 4px rgba(0,0,0,.12)',
    md: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
    lg: '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
    xl: '0 20px 40px rgba(0,0,0,0.2)',
  },
  zIndex: {
    z1: 0,
    z100: 100,
    z200: 200,
    z300: 300,
    z400: 400,
    z500: 500,
    z600: 600,
    z700: 700,
    z800: 800,
    z900: 900,
    z1000: 1000,
  },
};

export default theme;
