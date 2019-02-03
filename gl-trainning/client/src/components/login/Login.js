import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import StyledButton from "../../theme/gl-theme/Buttons";
import {LoginStyles} from "./Login-styles";
import {authService} from "../../shared/services/AuthService";
import AuthContext from "../../contexts/AuthContext";


class Login extends Component {

  state = {
    loading: false,
    email: '',
    password: '',
    error: null
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username: this.state.email,
      password: this.state.password
    };
    console.log('try to login...', payload);
    authService.login(payload)
      .then(token => {
        if (token) {
          console.log('login success:', token);
          this.props.onLoginSuccess(this.state.email);
          this.props.history.push('/webapp');
        } else {
          this.setState({error: authService.genericLoginError});
        }
      })
      .catch(error => this.setState({error: error.message}));

  };

  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography color='error'>
            {this.state.error}
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus value={this.state.email} onChange={this.handleInputChange}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handleInputChange}/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"/>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}>
              Sign in
            </StyledButton>
          </form>
        </Paper>
      </main>
    );
  };
}

export default withStyles(LoginStyles)(Login);