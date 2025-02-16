import React from 'react'
import './Footer.css'
import footerImage from '../../../assets/Home/shape-bg.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={footerImage} alt="no internet connection" />
        </div>
    </div>
  )
}

export default Footer