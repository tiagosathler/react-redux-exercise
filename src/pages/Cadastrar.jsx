import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MakeLogin from '../components/MakeLogin';
import { addClientAction } from '../redux/actions';

class Cadastrar extends Component {
  constructor(props) {
    super(props);

    const { logged } = props;
    this.state = {
      logged,
      client: {
        name: '',
        age: '',
        email: '',
      },
      added: false,
      disabledBtn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { client } = this.state;
    this.setState({
      client: { ...client, [name]: value },
      disabledBtn: !document.clientForm.checkValidity(),
      added: false,
    });
  }

  handleRegister() {
    // implemente a função de registrar o cliente ao REDUX
    const { addClient } = this.props;
    const { client } = this.state;
    addClient(client);
    this.setState({
      client: {
        name: '',
        age: '',
        email: '',
      },
      added: true,
    });
  }

  render() {
    const {
      client: {
        name,
        age,
        email,
      },
      logged,
      added,
      disabledBtn,
    } = this.state;

    if (!logged) {
      return <MakeLogin />;
    }
    return (
      <section>
        <h2>Cadastro de cliente</h2>
        <form name="clientForm">
          <fieldset>
            <legend>
              Dados do cliente
            </legend>
            <label htmlFor="name-input">
              Nome:
              <input
                id="name-input"
                type="text"
                name="name"
                value={ name }
                onChange={ this.handleChange }
                required
              />
            </label>
            <label htmlFor="age-input">
              Idade:
              <input
                id="age-input"
                type="number"
                name="age"
                min="0"
                value={ age }
                onChange={ this.handleChange }
                required
              />
            </label>
            <label htmlFor="email-input">
              Email:
              <input
                id="email-input"
                type="email"
                name="email"
                value={ email }
                onChange={ this.handleChange }
                required
              />
            </label>
            <button
              type="button"
              onClick={ this.handleRegister }
              disabled={ disabledBtn }
            >
              Adicionar
            </button>
          </fieldset>
        </form>
        { added && <h4>Cliente adicionado!</h4> }
      </section>
    );
  }
}

Cadastrar.propTypes = {
  addClient: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addClient: (user) => dispatch(addClientAction(user)),
});

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastrar);
