import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import orange from "@material-ui/core/es/colors/orange";
import red from "@material-ui/core/es/colors/red";

const glTheme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      ...orange,
    },
    error: red,
  },
  typography: {
    fontFamily:
      'roboto, sans-serif',
  },
});


export default glTheme;