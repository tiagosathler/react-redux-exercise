import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientNotFound extends Component {
  render() {
    return (
      <div>
        <h3>Nenhum cliente encontrado!</h3>
        <p>Para cadastrar algum cliente, clique no botão abaixo:</p>
        <button type="button">
          <Link to="/cadastrar">Cadastrar Cliente</Link>
        </button>
      </div>
    );
  }
}

export default ClientNotFound;
