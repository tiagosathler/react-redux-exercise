import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientNotFound from '../components/ClientNotFound';
import MakeLogin from '../components/MakeLogin';
import { removeClientAction } from '../redux/actions';

class Cadastros extends Component {
  constructor(props) {
    super(props);
    const { logged, clients } = props;

    this.state = {
      logged,
      clients,
    };
    this.sortNames = this.sortNames.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { clients } = this.props;
    if (prevProps.clients.length !== clients.length) {
      this.updateState(clients);
    }
  }

  handleRemove(user) {
    // implemente a função de remover ao REDUX
    const { removeClient } = this.props;
    removeClient(user);
  }

  updateState(clients) {
    this.setState({
      clients,
    });
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
                  onClick={ () => this.handleRemove({ name, age, email }) }
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

Cadastros.propTypes = {
  logged: PropTypes.bool.isRequired,
  clients: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeClient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  clients: state.data.clients,
});

const mapDispatchToProps = (dispatch) => ({
  removeClient: (user) => dispatch(removeClientAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastros);
