import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navparent'>
    
    <div className="navlogo">
        <div className="navlogoTHE">The</div>
        <div className="navlogoSIREN">Siren</div>
    </div>
    <div className='navbar'>
        <Link to='/' className='navlink' ></Link>
        <Link to='/home' className='navlink' >Home</Link>
        <Link to='/bollywood' className='navlink' >Bollywood</Link>
        <Link to='/hollywood' className='navlink' >Hollywood</Link>
        <Link to='/technology' className='navlink' >Technology</Link>
        <Link to='/fitness' className='navlink' >Fitness</Link>
        <Link to='/food' className='navlink' >Food</Link>
    </div>
    


    </div>
  )
}

export default Navbar;