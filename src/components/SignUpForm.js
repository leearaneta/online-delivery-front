import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SignUpForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/dashboard');
    }
  }

  render() {
    const {asyncValidating, fields: { first_name, last_name, email, password, confirmPassword}, validateFields, handleSubmit, submitting } = this.props;
    return (
      <div className="container">
      <form onSubmit={handleSubmit(this.props.signUpUser.bind(this))}>
        <div className={`form-group ${first_name.touched && first_name.invalid ? 'has-error' : ''}`}>
          <label className="control-label">First</label>
          <input type="text" className="form-control" {...first_name} />
          <div className="help-block">
            {first_name.touched ? first_name.error : ''}
          </div>
        </div>

        <div className={`form-group ${last_name.touched && last_name.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Last</label>
          <input type="text" className="form-control" {...last_name} />
          <div className="help-block">
            {last_name.touched ? last_name.error : ''}
          </div>
        </div>
        
        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Email</label>
          <input type="email" className="form-control" {...email} />
          <div className="help-block">
            {email.touched ? validateFields.error : ''}
            {email.touched ? email.error : ''}
          </div>
          <div className="help-block">
          {asyncValidating === 'email' ? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Password</label>
          <input type="password" className="form-control" {...password} />
          <div className="help-block">
            {password.touched ? password.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>
        <h5> Already signed up? <Link to="/signin" className="btn btn-error">Login!</Link> </h5>
      </div>

    );
  }
}

export default SignUpForm;