import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import orange from "@material-ui/core/es/colors/orange";
import grey from "@material-ui/core/es/colors/grey";

const glTheme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      ...orange,
    },
    error: grey,
  },
  typography: {
    fontFamily:
      'roboto, sans-serif',
  },
});


export default glTheme;