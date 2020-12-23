import React from 'react'
import './styles.css'

export default function CardAbout(props) {

  const {image, name, githubProfile} = props

  return (
    <div class="cardContainer">
       <img src={image} alt="User Image Profile" />
       <h1>{name}</h1>
       <p>{githubProfile}</p>
    </div>
  )
  
}

  
