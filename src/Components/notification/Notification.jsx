import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { toast } from 'react-toastify';


const scalein = keyframes`
  100% {
    transform: scale(1);
    opacity: 1;
  }
`
const expand = keyframes`
  50% {
    width: 350px;
    border-radius: 6px;
  }
  100% {
    width: 300px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -1px rgba(0, 0, 0, 0.12);
  }
`
const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
  
`
const Container = styled.div`
position: relative;
display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`

const Rectangle = styled.div`
 display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  height: 50px;
  background: ${props => props.inputColor};
  transform: scale(0);
  border-radius: 50%;
  color: white;
  opacity: 0;
  overflow: hidden;
  -webkit-animation: ${scalein} 0.3s ease-out forwards, ${expand} 0.35s 0.25s ease-out forwards;
          animation: ${scalein} 0.3s ease-out forwards, ${expand} 0.35s 0.25s ease-out forwards;
`
const Notifi = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  -webkit-animation: ${fadein} 0.65s ease-in forwards;
          animation: ${fadein} 0.65s ease-in forwards;
`


export default function Notification({ data }) {
  const [color, setColor] = useState()
  // checks for the String we get from the server which gets passed down as props to Notification
  useEffect(() => {
    if (data === "Email and Password is required") {
      setColor('#3c90d1')
    } else
      if (data === "Logged In" || data === "Account Created") {
        setColor('#039f03')
      } else {
        setColor('#e14d45')
      }
    toast(data)
  }, [data])

  return (
    <Container >
      <Rectangle inputColor={color}>
        <Notifi>
          <span>{data}</span>
        </Notifi>
      </Rectangle>
    </Container>

  )
}
