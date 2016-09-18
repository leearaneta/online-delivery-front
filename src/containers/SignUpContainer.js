import SignUpForm from '../components/SignUpForm.js';
import {signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/users';
import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../actions/validateUserFields';

import { reduxForm } from 'redux-form';

function validate(values) {
  var errors = {};
  var hasErrors = false;

  if (!values.first_name || values.first_name.trim() === '') {
    errors.first_name = 'Enter your first name!';
    hasErrors = true;
  }
  if (!values.last_name || values.name.trim() === '') {
    errors.last_name = 'Enter your last name!';
    hasErrors = true;
  }
  if(!values.email || values.email.trim() === '') {
    errors.email = 'Enter your email!';
    hasErrors = true;
  }
  if(!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
   return hasErrors && errors;
} 

const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(validateUserFields(values))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status !== 200) {
          dispatch(validateUserFieldsFailure(response.payload.response.data.error));
           reject(data); 
         } else {
          dispatch(validateUserFieldsSuccess(response.payload)); 
          resolve();
        }
      });
  });
};


const validateAndSignUpUser = (formValues, dispatch) => {
  return new Promise((resolve, reject) => {
   dispatch(signUpUser(formValues))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status !== 200) {
          dispatch(signUpUserFailure(response.payload));
           reject(data); 
         } else {
          sessionStorage.setItem('jwtToken', data.auth_token);
          dispatch(signUpUserSuccess(data.user)); 
          resolve();
        }
      });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
   signUpUser: validateAndSignUpUser,
   resetMe: () =>{
     dispatch(resetValidateUserFields());
    }
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    validateFields: state.validateFields
  };
}

export default reduxForm({
  form: 'SignUpForm', 
  fields: ['first_name','last_name', 'email', 'password'], 
  asyncValidate,
  asyncBlurFields: ['email'],
  validate 
}, mapStateToProps, mapDispatchToProps)(SignUpForm);
