import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Oski Subleasing</Link>
      <Link to="/new">Post a Listing</Link>
    </nav>
  );
}

export default Navbar;