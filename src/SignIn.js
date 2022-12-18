import React from 'react'
import styled from "styled-components";
import {Small,Body,Highlight,Subtitle,Title,Headings} from './Style/StyledTypography'
function SignIn() {

const Container = styled.div`
display: flex;
justify-content: center;
`
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
    <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </Container>
    </>
  )
}

export default SignIn