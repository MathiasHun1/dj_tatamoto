const SIZES = {
  phone: 600,
  tablet: 1000,
};

export const QUERIES = {
  tabletAndUp: `min-width: ${SIZES.phone}px`,
  laptopAndUp: `min-width: ${SIZES.tablet}px`,
};

export const COLORS = {
  primary: 'hsl(0 0 8)',
  secondary: 'hsl(345, 6.9%, 88.63%)',
  third: 'hsl(345, 6.9%, 75%)',

  lightBlue: 'hsl(265, 100%, 51%)',
  moderateBlue: 'hsl(245, 100%, 71%)',
  mediumBlue: 'hsl(265 100 30)',
  darkblue: `hsl(265, 100%, 17%)`,
  white: 'hsl(0 0 95)',
};

export const FONTSIZES = {
  smallMobile: `${15 / 16}rem`,
  smallDesktop: `${17.1 / 16}rem`,
  mediumMobile: `${20 / 16}rem`,
  mediumDesktop: `${24 / 16}rem`,
  largeMobile: `${28 / 16}rem`,
  largeDesktop: `${40 / 16}rem`,
};
