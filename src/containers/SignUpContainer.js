import React, {PropTypes}from 'react';
import SignUpForm from '../components/SignUpForm.js';
import {signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/users';
import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../actions/validateUserFields';
import { reduxForm } from 'redux-form'


const validate = values => {

  const errors = {}
  const requiredFields = [ 'first_name', 'last_name', 'email', 'password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
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
    user: state.user
  };
}

SignUpForm.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'SignUpForm', 
  fields: ['first_name','last_name', 'email', 'password'], 
  asyncValidate,
  asyncBlurFields: ['email'],
  validate 
}, mapStateToProps, mapDispatchToProps)(SignUpForm);
