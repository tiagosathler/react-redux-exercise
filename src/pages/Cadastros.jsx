import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClientNotFound from '../components/ClientNotFound';
import MakeLogin from '../components/MakeLogin';

class Cadastros extends Component {
  constructor(props) {
    super(props);

    const { clients, logged } = props;

    this.state = {
      // username: '',
      logged,
      clients,
    };
  }

  render() {
    const {
      // username,
      logged,
      clients,
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
              <td>Remove</td>
            </tr>
          ))}
        </table>
      </section>
    );
  }
}

Cadastros.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
  logged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  clients: state.data.clients,
  logged: state.user.logged,
});

export default connect(mapStateToProps, null)(Cadastros);
