import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>TrybeRecords</h1>
        <aside>
          <Link to="/"> Home /</Link>
          <Link to="/cadastrar"> Cadastrar Cliente /</Link>
          <Link to="/cadastros"> Ver cadastros </Link>
        </aside>
      </header>
    );
  }
}

export default Header;
