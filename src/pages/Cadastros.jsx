import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClientNotFound from '../components/ClientNotFound';
import MakeLogin from '../components/MakeLogin';
import { removeClientAction } from '../redux/actions';

const NEG_UM = -1;

class Cadastros extends Component {
  constructor(props) {
    super(props);

    const { clients, logged } = props;

    this.state = {
      // username: '',
      logged,
      clients,
      sort: false,
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

  handleRemove(name) {
    const { removeClient } = this.props;
    removeClient(name);
  }

  updateState(clients) {
    this.setState({
      clients,
    });
  }

  sortNames({ target: { name, checked } }) {
    const { clients } = this.state;
    const mapped = clients.map((x) => x);
    if (checked) {
      const sortedClients = mapped.sort((a, b) => ((a.name > b.name) ? 1 : NEG_UM));
      this.setState({
        [name]: checked,
        clients: sortedClients,
      });
    } else {
      const { clients: originalClients } = this.props;
      this.setState({
        [name]: checked,
        clients: originalClients,
      });
    }
  }

  render() {
    const {
      // username,
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

Cadastros.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.any).isRequired,
  logged: PropTypes.bool.isRequired,
  removeClient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  clients: state.data.clients,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  removeClient: (client) => dispatch(removeClientAction(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastros);
