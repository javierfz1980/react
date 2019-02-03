import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const StyledButton = theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.secondary[400]}, ${theme.palette.primary[900]})`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'uppercase',
    color: 'black'
  },
});

export default withStyles(StyledButton)(Button);
