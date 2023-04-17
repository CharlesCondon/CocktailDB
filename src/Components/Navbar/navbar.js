import React from 'react';
import './navbar.css';
import Eye from '../../assets/eye.webp';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div id='headContainer'>
        <header>
            <img id='eye' src={Eye} alt='eye logo'/>
            <div id='linkContainer'>
                <Link to='/' className='navLinks'>Home</Link>
                <Link to='/my-recipes' className='navLinks'>My-Recipes</Link>
                <Link to='/search' className='navLinks'>Search</Link>
                <Link to='/randomdrink' className='navLinks'>Random</Link>
            </div>
        </header>
    </div>
  )
}

export default navbar