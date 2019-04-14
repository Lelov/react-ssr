import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
    </>
  )
}

export default Header;