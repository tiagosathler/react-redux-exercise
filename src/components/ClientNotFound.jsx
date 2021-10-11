import React, { Component } from 'react';

class ClientNotFound extends Component {
  render() {
    return (
      <div>
        <h3>Nenhum cliente encontrado!</h3>
        <p>Para cadastrar algum cliente, clique no botão abaixo:</p>
        <button type="button">
          Faça o Link para página Cadastrar
        </button>
      </div>
    );
  }
}

export default ClientNotFound;
