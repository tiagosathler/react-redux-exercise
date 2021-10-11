import React, { Component } from 'react';
import ClientNotFound from '../components/ClientNotFound';
import MakeLogin from '../components/MakeLogin';
// import PropTypes from 'prop-types';

class Cadastros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      logged: false,
      clientes: [],
    };
  }

  render() {
    const {
      // username,
      logged,
      clientes,
    } = this.state;
    if (!logged) {
      return <MakeLogin />;
    }
    if (clientes.length === 0) {
      return <ClientNotFound />;
    }
    return (
      <section>
        <h3>Clientes cadastrados</h3>
        <table>
          <tr>
            <th>Índice</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Remover</th>
          </tr>
          { clientes.map(({ name, idade, email }, index) => (
            <tr key={ index }>
              <td>{ index + 1 }</td>
              <td>{ name }</td>
              <td>{ email }</td>
              <td>{ idade }</td>
              <td>Remove</td>
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
