import SignUpForm from '../components/SignUpForm.js';
import {signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/users';
import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../actions/validateUserFields';
import _ from 'lodash';
import { reduxForm } from 'redux-form';

const FIELDS = {
  first_name: {
    type: 'input',
    label: 'First Name'
  },
  last_name: {
    type: 'input',
    label: 'Last Name'
  },
  email: {
    type: 'input',
    label: 'Email'
  },
  password: {
    type: 'password',
    label: 'Password'
  },
  confirm_password: {
    type: 'password',
    label: 'Confirm Password'
  }
};

function validate(values) {
  var errors = {};
  var hasErrors = false

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter ${field.split("_")}`;
      hasErrors = true;
    }
  });

  if(values.confirmPassword && values.password && values.password !== values.confirmPassword) {
    errors.password = 'Password And Confirm Password don\'t match';
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
  fields:  _.keys(FIELDS),
  asyncValidate,
  asyncBlurFields: ['email'],
  validate
}, mapStateToProps, mapDispatchToProps)(SignUpForm);
