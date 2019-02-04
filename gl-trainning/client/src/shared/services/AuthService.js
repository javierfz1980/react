import constants from "../constants/Constants";
import axios from 'axios';

const path =`${constants.basePath}/login`;
const genericLoginError = 'login error';

function login (payload) {
  return axios.post(path, payload)
    .then(response => {
      const token = response.data['token'];
      localStorage.setItem('token', token);
      localStorage.setItem('username', payload.username);
      return token;
    })
    .catch(error => {
      console.error('login error: ', error.message);
      error.message = genericLoginError;
      throw error;
    })
}

function logout() {
  localStorage.removeItem('token')
  return new Promise();
}

export const authService = {
  path,
  genericLoginError,
  login,
  logout
};