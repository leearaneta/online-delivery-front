import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import { TextField,PasswordField } from 'redux-form-material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class SignUpForm extends Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentDidMount() {
    this.refs.first_name
      .getRenderedComponent()
      .getRenderedComponent()
      .focus()
  }

  render() {

     const { asyncValidating, handleSubmit, pristine, reset, submitting } = this.props
    return (

      <form onSubmit={handleSubmit}>
        <div>
          <Field name="first_name" component={TextField} hintText="First Name" floatingLabelText="First Name"
            ref="first_name" withRef/>
        </div>
        <div>
          <Field name="last_name" component={TextField} hintText="Last Name" floatingLabelText="Last Name"
            ref="last_name" />
        </div>
        <div>
          <Field name="email" component={TextField} hintText="Email" floatingLabelText="Email"/>
        </div>
        <div>
          <Field name="password" component={TextField} type="password" hintText="Password" floatingLabelText="Password"/>
        </div>
        <div>
          <button type="submit" className="mdl-button" disabled={pristine || submitting}>Sign Up</button>
          <button type="button" className="mdl-button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div> 
        <br />
        <div>
          <h5> Already signed up? <Link to="/signin" className="btn btn-error">Login!</Link> </h5>
        </div>
      </form>
    );
  }
}

export default SignUpForm;