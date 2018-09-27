import React from 'react'
import styled from 'styled-components'

export default () => (
  <Container>
    <Hello>hello!</Hello>
    <World>
      I’m Chris Yang.
      <br /> I’m Web Engineer.
      <br /> I Love Code, Design.
    </World>
  </Container>
)

const Container = styled.div`
  grid-area: bio;
  display: inline-block;
  position: relative;
  height: 106px;
  width: 265px;
  justify-self: center;
  align-self: center;
`

const Hello = styled.div`
  position: absolute;
  left: 106px;
  top: 0px;
  font-family: 'Poppins';
  font-weight: 800;
  font-size: 36px;
  text-transform: uppercase;
  content: 'hello';
  &::before {
    content: '';
    background-image: url('/static/character_square-200px.png');
    background-size: contain;
    position: absolute;
    left: -106px;
    top: 2px;
    width: 100px;
    height: 100px;
  }
`

const World = styled.div`
  line-height: 1.4;
  position: absolute;
  left: 107px;
  top: 42px;
  font-family: 'Poppins';
  font-weight: normal;
  font-size: 14px;
`
