import React, { useRef, useState } from 'react'
import styled from "styled-components";
import {Small,Body,Highlight,Subtitle,Title,Headings} from './Style/StyledTypography'
import {Input,Button} from './Style/StyledComponents'
import axios from 'axios';


const Container = styled.div`
text-align: center;
`

function SignIn() {
  //Server needs to run on port 3001
  const client = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Authorization': 'Bearer <YOUR_JWT_TOKEN>'
    }
  });
  const email = useRef()
  const password = useRef()
  
  function handleEmail (e){
      email.current = e.target.value 
  }
  function handlePassword (e){
        password.current = e.target.value
  }

  //TOKEN GET STORED IN LOCAL HOST WE RECIVE FROM BACKEND
  const login = (e,email,password) =>{
    e.preventDefault()
  client.post('/login', { email, password }).then(response => {
    // Save the JWT token in local storage
    localStorage.setItem('token', response.data.token);
  })};

  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
  return (
    <>
    <div>SignIn</div>
    <Container>
      <Title>SignIn</Title>
        <form onSubmit={(e)=> login(e, email.current,password.current)}>
        <Input onChange={(e)=> handleEmail(e)} type="email" name='email' placeholder="Email"/>
        <Input onChange={(e)=> handlePassword(e)} type="password" name='password' placeholder="Password"/>
        <Button type='submit'><Highlight>Sign In</Highlight></Button>
        </form>
        <Small>Not a member? <span>Sign Up</span></Small>
      <Subtitle>Facebook</Subtitle>
      <Subtitle>Apple</Subtitle>
      <Subtitle>Email</Subtitle>

      <div className="g-signin2" data-onsuccess="onSignIn"></div>


    </Container>
    </>
  )
}

export default SignIn