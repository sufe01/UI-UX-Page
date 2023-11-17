import React from 'react'
import Navbar from './Navbar'
import my_image from './Assets/img.svg';

const Header = () => {
  return (
    <div>
          <header>
          <Navbar />
        <div className="content">
          <div className="text-content">
            <h5>This is my new skills added.</h5>
            <h1>The future <br /> is <span>UI/UX</span> and i'll be yours</h1>
            <p>some other words here...</p>
          </div>
          <div className="image-content">
            <img src={my_image} alt="" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
