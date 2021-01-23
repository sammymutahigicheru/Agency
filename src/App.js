import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import { connect } from 'react-redux';

import AdminWrapper from './components/AdminWrapper';
import Dashboard from './components/pages/Dashboard';
import React, { Component } from 'react';
import LoginWrapper from './components/LoginWrapper';
import Users from './components/pages/admin/Users';
import Posts from './components/pages/admin/Posts';

class App extends Component {
  render(){
    return (
      <Router>
        <Route 
        path = "/admin/users"
        component = {Users}
        />

        <Route 
        path = "/admin/posts"
        component = {Posts}
        />

        <Route 
        path = "/admin"
        render = {props =>{
          return (
            <div>
              
              {this.props.auth.token ?
              <AdminWrapper>
                < Dashboard />
              </AdminWrapper>

              :
              <LoginWrapper>
                 <Login />
              </LoginWrapper>
              
                }
            </div>
            
         
          )
        }}
        />
  
          <Route
            exact = {true}
            path="/"
            render={props =>(
             <Home {...props} />
              )}
          />
  
          <Route
            path="/about"
            render={props =>(
              <About {...props} />
               )}
         />
  
         <Route 
         path = "/contact"
         render={props =>(
          <Contact {...props} />
           )}
        />
    
      </Router>
      
    );
  }
  
}

const mapStateToProps = state =>{
  return {
   auth: state.auth
  }
}

const mapDispatchToProps = dispatch =>{
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

