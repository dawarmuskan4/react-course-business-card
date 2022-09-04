import React from 'react'
import photo from '../assets/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Information = () => {
  return (
    <div>
      <img src={photo} className="information-img"/>
      <h1 className="information-name">Laura Smith</h1>
      <p className="information-title">Frontend Developer</p>
      <button className="information-button"> <FontAwesomeIcon icon="fa-light fa-envelope" />Email</button>
    </div>
  )
}

export default Information