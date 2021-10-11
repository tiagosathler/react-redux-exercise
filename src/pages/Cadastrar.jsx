import React, { Component } from 'react';
import MakeLogin from '../components/MakeLogin';
// import PropTypes from 'prop-types';

class Cadastrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      logged: false,
      client: {
        name: '',
        age: '',
        email: '',
      },
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
    });
  }

  handleRegister() {
    const { client } = this.state;
    console.table(client);
  }

  render() {
    const {
      client: {
        name,
        age,
        email,
      },
      logged,
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
      </section>
    );
  }
}

// Cadastrar.propTypes = {

// };

export default Cadastrar;
