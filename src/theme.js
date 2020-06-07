import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    // fontFamily: '"Maven Pro", sans-serif',
    // fontSize: 12,
    // body2: {
    //   lineHeight: 1,
    // },
    pxToRem: (size) => `${size / 16}rem`,
  },
  breakpoints: {
    values: {
      xl: 1300,
      lg: 1200,
      md: 830,
      sm: 600,
      xs: 300,
    },
  },
  palette: {
    red: red.A700,
    // primary: {
    //   main: "#556cd6",
    // },
    // secondary: {
    //   main: "#19857b",
    // },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: "#fff",
    // },
  },
});

export default theme;
