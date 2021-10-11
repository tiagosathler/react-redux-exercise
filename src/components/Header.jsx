import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>TrybeRecords</h1>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/login"> Fazer Login </Link>
          <Link to="/cadastrar"> Cadastrar Cliente </Link>
          <Link to="/cadastros"> Visualizar Cadastros </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
