import SignInForm from '../components/SignInForm.js';
import {signInUser, signInUserSuccess, signInUserFailure } from '../actions/users';
import { reduxForm } from 'redux-form';

function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter email';
    hasErrors = true;
  }
  if(!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
   return hasErrors && errors;
}

const validateAndSignInUser = (values, dispatch) => {
  return new Promise((resolve, reject) => {
   dispatch(signInUser(values))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status !== 200) {
          dispatch(signInUserFailure(response.payload));
           reject(data); 
         } else {
          sessionStorage.setItem('jwtToken', data.auth_token);
          dispatch(signInUserSuccess(response.payload));
          resolve();
        }
      });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
   signInUser: validateAndSignInUser
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default reduxForm({
  form: 'SignInForm',
  fields: ['email', 'password'],
  null,
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(SignInForm);
