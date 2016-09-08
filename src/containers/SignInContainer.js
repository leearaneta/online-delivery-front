import SignInForm from '../components/SignInForm.js';
import {signInUser, signInUserSuccess, signInUserFailure } from '../actions/users';
import { reduxForm } from 'redux-form';
import _ from 'lodash';

const FIELDS = {
  email: {
    type: 'input',
    label: 'Email'
  },
  password: {
    type: 'password',
    label: 'Password'
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
  fields: _.keys(FIELDS),
  null,
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(SignInForm);
