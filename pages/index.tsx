import React, { Component } from 'react'
import styled from 'styled-components'
import { BioContainer, LinkContainer, Head } from '../components'

export default class extends Component {
  render() {
    return (
      <>
        <Head title="Home" />
        <Container key="Motion">
          <BioContainer />
          <LinkContainer
            href={'/blog'}
            icon={'blog'}
            background={'linear-gradient(135deg, #f5b942 0%, #ee6537 100%)'}
            boxShadowColor={'rgba(238,101,55,0.4)'}
            gridArea={'blog'}
          />
          <LinkContainer
            href={''}
            redirect={() => window.open('https://cphoto.github.io/')}
            icon={'photo'}
            background={'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)'}
            boxShadowColor={'rgba(40,199,111,0.4)'}
            gridArea={'photo'}
          />
          <LinkContainer
            href={'/cv'}
            icon={'resume'}
            background={'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)'}
            boxShadowColor={'rgba(115,103,240,0.4)'}
            gridArea={'resume'}
          />
          <LinkContainer
            href={''}
            redirect={() => window.open('https://github.com/ysm0622/')}
            icon={'github'}
            background={'#181717'}
            boxShadowColor={'rgba(24,23,23,0.4)'}
            gridArea={'github'}
          />
          <LinkContainer
            href={''}
            redirect={() => window.open('https://facebook.com/ysm0622')}
            icon={'facebook'}
            background={'linear-gradient(to bottom, #6685cf 10%, #304882 100%)'}
            boxShadowColor={'rgba(48,72,130,0.4)'}
            gridArea={'facebook'}
          />
          <LinkContainer
            href={''}
            redirect={() => window.open('https://instagram.com/ysm0622_')}
            icon={'instagram'}
            background={
              'radial-gradient(circle at 20% 117%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
            }
            boxShadowColor={'rgba(253,89,73,0.4)'}
            gridArea={'instagram'}
          />
          <LinkContainer
            href={''}
            redirect={() => window.open('https://www.linkedin.com/in/ysm0622/')}
            icon={'linkedin'}
            background={'#317ab0'}
            boxShadowColor={'rgba(49,122,176,0.4)'}
            gridArea={'linkedin'}
          />
          <LinkContainer
            href={''}
            redirect={() => window.open('https://twitter.com/ysm0622_')}
            icon={'blog'}
            background={'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)'}
            boxShadowColor={'rgba(3,150,255,0.4)'}
            gridArea={'twitter'}
          />
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  margin: auto;
  height: 100%;
  max-width: 1200px;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-gap: 3.5vw;
  padding: 3.5vw;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    'bio bio'
    'blog photo'
    'resume github'
    'facebook instagram'
    'linkedin twitter';
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 2fr 2fr 2fr;
    grid-template-areas:
      'bio bio bio bio bio bio'
      'blog blog photo photo resume resume'
      'github github facebook facebook instagram instagram'
      'linkedin linkedin linkedin twitter twitter twitter';
  }
  @media (min-width: 1200px) {
    grid-gap: 36px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr 2fr;
    grid-template-areas:
      'bio bio bio bio'
      'blog photo resume github'
      'facebook instagram linkedin twitter';
  }
`
