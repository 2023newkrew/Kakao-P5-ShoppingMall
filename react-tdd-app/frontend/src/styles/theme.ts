export const size = {
  largest: '75em',
  large: '56.25em',
  medium: '37.5em',
  small: '31.25em',
  smallest: '25em',
};

const theme = {
  mq: {
    laptop: `@media only screen and (max-width: ${size.largest})`,
    tablet: `@media only screen and (max-width: ${size.large})`,
    mobile: `@media only screen and (max-width: ${size.small})`,
  },
  mqt: {
    laptop: `only screen and (max-width: ${size.largest})`,
    tablet: `only screen and (max-width: ${size.large})`,
    mobile: `only screen and (max-width: ${size.small})`,
  },
  colors: {
    primaryColor: '#005f73',
    secondaryColor: '#0a9396',
    accentColor: '#ae2012',
    primaryTextColor: '#212121',
    secondaryTextColor: '#757575',
    dividerColor: '#bdbdbd',
  },
  fontSizes: {
    xxs: '0.5rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1.25rem',
    md: '1.5rem',
    lg: '2rem',
  },
};

export default theme;
