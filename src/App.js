import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import { Button, Form, FormGroup, Label, Input }
from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
   
      <form  className="login-form">
     <h1>
       <span className="font-weight-bold">My web site</span>
     </h1>
     <FormGroup>
       <Label>Email</Label>
     <Input type="email" placeholder="Email"/>
     </FormGroup>
     <FormGroup>
     <Label>Password</Label>
     <Input type="password" placeholder="password"/>
     </FormGroup>
     <Button className="btn-lg btn-dark btn-block">login</Button>
      <div className="text-center pt-3">
        or continue with your social account
      </div>
      <FacebookLoginButton/>
      </form>
      
  
  );
}
export default App;
