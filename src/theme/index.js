const breakpoints = ['992px'];

const fontSizes = ['1rem', '2rem', '3rem'];
fontSizes.body = fontSizes[0];
fontSizes.subheading = fontSizes[1];
fontSizes.heading = fontSizes[2];

const colors = {
  black: '#1b1b1b',
  trueBlack: '#000000',
  white: '#fffaf0',
  trueWhite: '#ffffff',
  darkGray: '#242425',
  darkishGray: '#4c4c4c',
  mediumGray: '#959595',
  blue: '#365194',
  orange: '#de8b45',
  magenta: '#c52271',
  green: '#4b7841',
};

const space = [
  0,
  '0.25rem', // 1
  '0.5rem', // 2
  '0.75rem', // 3
  '1rem', // 4
  '1.5rem', // 5
  '2rem', // 6
  '3rem', // 7
  '4rem', // 8
  '5rem', // 9
  '6rem', // 10
];
space.xs = space[1];
space.sm = space[2];
space.md = space[4];
space.lg = space[6];
space.xl = space[8];
space.xxl = space[10];

const zIndices = {
  above: 10,
  modal: 20,
  fixed: 30,
};

const fonts = {
  heading: '"League Spartan", sans-serif',
  body: 'Roboto, sans-serif',
};

const fontWeights = {
  heading: 700,
  bold: 500,
  subheading: 500,
  body: 400,
};

const text = {
  heading: {
    fontSize: 'heading',
    color: 'black',
  },
  tinyHeading: {
    color: 'mediumGray',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    fontWeight: 'body',
  },
};

const variants = {
  link: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    ':focus, :hover': {
      color: 'magenta',
    },
  },
  navLink: {
    display: 'block',
    mb: 'lg',
    color: 'white',
    fontSize: 'subheading',
    fontWeight: 'subheading',
    textDecoration: 'none',
    outline: 0,
    ':hover, :focus': {
      fontSize: 'heading',
      fontWeight: 'heading',
      color: 'accent',
      mb: '0.8rem',
      position: 'relative',
      bottom: 'sm',
    },
  },
  iconLink: {
    color: 'mediumGray',
    fontSize: '1.25rem',
    outline: 0,
    ':hover, :focus': {
      color: 'accent',
    },
  },
};

const buttons = {
  primary: {
    color: 'black',
    bg: 'accent',
    borderRadius: 0,
  },
  none: {
    color: 'black',
    padding: 0,
    bg: 'transparent',
    cursor: 'pointer',
    outline: 0,
    ':hover, :focus': {
      color: 'accent',
    },
  },
};

export default {
  breakpoints,
  fontSizes,
  colors,
  space,
  zIndices,
  fonts,
  fontWeights,
  lineHeights: {},
  shadows: {},
  variants,
  text,
  buttons,
};
