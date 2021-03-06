import React from 'react';
import {connect} from 'react-redux';



import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component.jsx'
import CustomButton from '../../components/custom-button/custom-button.component.jsx';


import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

class SignIn extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
      password: '',

    }
  }
handleSubmit = async event => {
    event.preventDefault();
    const {emailSignInStart} = this.props;
    const {email, password} = this.state;
  
    emailSignInStart ({email,password});
};
handleChange = event => {
  const {value,name} = event.target;
  this.setState ({[name]: value})
}

  render () {

    const {GoogleSignInStart} = this.props;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and passwords</span>

        <form onSubmit = {this.handleSubmit}>
        
          <FormInput 
          name='email'
          type ='email'
          handleChange={this.handleChange}
          value = {this.state.email} 
          label ="email"
          required />
         
          <FormInput 
          name='password' 
          type = 'password'
          value = {this.state.password} 
          handleChange={this.handleChange}
          label = "password"
          required 

          />
          <div className='buttons'>
          <CustomButton type = 'submit' >SIGN IN</CustomButton>
          <CustomButton type='button' onClick={GoogleSignInStart} isGoogleSignIn > 
          {''}Sign in with Google {''}
          </CustomButton>
          </div>       
          </form>
          
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect (null, mapDispatchToProps) (SignIn); 