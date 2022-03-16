import React from 'react'
import { SubHome } from './SubHome';

export const Home = (props) => {

  var no1 = 1;
  var no2 = 2;
  var ans = no1 + no2;
  const name = "Raj"
  console.log(props.title)

  var style = {
    color: 'red',
    fontSize: '20px'
}
  return (

    <div>
      <h1>HOME</h1>
      <h3>{props.title}</h3>
      <SubHome title = {props.title}/>

    </div>

  )
}