import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MakeLogin extends Component {
  render() {
    return (
      <div>
        <h3>Login não efetuado!</h3>
        <p>Para fazer o login, clique no botão abaixo:</p>
        <button type="button">
          <Link to="/login">Login</Link>
        </button>
      </div>
    );
  }
}

export default MakeLogin;
