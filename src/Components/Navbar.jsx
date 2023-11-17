import React from 'react'

const Navbar = () => {
  return (
    <div>
          <nav>
              <div className="logo"><h4>LOGO</h4></div>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Skills</a></li>
              </ul>
              <div className="btns">
                  <span><a href="#">Sign In</a></span>
                  <span><a href="#">Sign Up</a></span>
              </div>
      </nav>
    </div>
  )
}

export default Navbar
