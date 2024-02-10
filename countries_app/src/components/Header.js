import React from 'react'
import "../css/Header.css"


const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='welcome-text'>
            <h1>Explore Countries</h1>
        </div>
    </div>
    <div className='menu'>
      <ul>
        <li><a href='/'><b>Characters</b></a></li>
        <li><a href='/episodes'><b>Episodes</b></a></li>
      </ul>
    </div>
    </>
  );
}

export default Header