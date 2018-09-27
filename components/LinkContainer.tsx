import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface ILinkContainerProps {
  icon: string
  background: string
  boxShadowColor: string
  gridArea: string
  href?: string
  redirect?: () => void
}

export default (props: ILinkContainerProps) => (
  <Link prefetch href={props.href}>
    <Icon
      onClick={props.redirect}
      icon={props.icon}
      background={props.background}
      boxShadowColor={props.boxShadowColor}
      gridArea={props.gridArea}
    />
  </Link>
)

const Icon = styled<ILinkContainerProps, 'a'>('a')`
  /* margin: 8px; */
  grid-area: ${props => props.gridArea};
  /* position: relative; */
  display: flex;
  border-radius: 10px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  background: ${props => props.background};
  &::after {
    background-image: url('/static/${props => props.icon}.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 27.639579878%;
    content: '';
    display: block;
    height: 100%;
    /* position: absolute; */
    width: 100%;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px ${props => props.boxShadowColor};
  }
  @media (min-width: 800px) and (max-width: 1200px) {
    &::after {
      background-size: auto 27.639579878%;
    }
  }
`
