import React from "react";
import {Link} from 'react-router-dom'
import '../Home.css'

const Header = () => {
  return (
    <header className="header">
      <h2 className="home-title">Devmountain Eatery</h2>
      <nav>
        <Link to="">
        <button className="homepage-btns">Home</button>
        </Link>
          <Link to="/newRecipe">
          <button className="homepage-btns">Add Recipe</button>
          </Link>
          
      </nav>
    </header>
  );
};

export default Header;
