import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import {Switch , Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

import {connect} from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';





class App extends React.Component { 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
    <Header />
       <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path ='/signin' render = {() => this.props.currentUser ? (<Redirect to='/'/>
            ) : (
              <SignInAndSignUpPage/>
            )
            }
            />
       </Switch>
    
    </div>
    
  );
}}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);