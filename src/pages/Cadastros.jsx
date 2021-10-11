import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ClientNotFound from '../components/ClientNotFound';
import MakeLogin from '../components/MakeLogin';

class Cadastros extends Component {
  constructor() {
    super();

    this.state = {
      logged: true,
      clients: [],
    };
    this.sortNames = this.sortNames.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(name) {
    // implemente a função de remover ao REDUX
    console.log(name);
  }

  sortNames({ target: { name, checked } }) {
    // implemente a função de ordenar para renderizar em ordem alfabética
    console.log(name, checked);
  }

  render() {
    const {
      logged,
      clients,
      sort,
    } = this.state;

    if (!logged) {
      return <MakeLogin />;
    }
    if (clients.length === 0) {
      return <ClientNotFound />;
    }

    return (
      <section>
        <h3>Clientes cadastrados</h3>
        <label htmlFor="check_sort">
          Ordenar por nomes:
          <input
            id="check_sort"
            name="sort"
            checked={ sort }
            onChange={ this.sortNames }
            type="checkbox"
          />
        </label>
        <table>
          <tr>
            <th>Índice</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Remover</th>
          </tr>
          { clients.map(({ name, age, email }, index) => (
            <tr key={ index }>
              <td>{ index + 1 }</td>
              <td>{ name }</td>
              <td>{ email }</td>
              <td>{ age }</td>
              <td>
                <button
                  type="button"
                  onClick={ () => this.handleRemove(name) }
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    );
  }
}

// Cadastros.propTypes = {

// };

export default Cadastros;
