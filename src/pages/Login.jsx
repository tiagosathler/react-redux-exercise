import React, { Component } from 'react';
import { Redirect } from 'react-router';
// import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      disabledBtn: true,
      failed: false,
      logged: false,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
      failed: false,
      disabledBtn: !document.loginForm.checkValidity(),
    });
  }

  handleLogin() {
    const { username, password } = this.state;
    if (username === 'tryber@trybe.com' && password === '1234') {
      this.setState({ logged: true });
    } else {
      this.setState({ failed: true });
    }
  }

  render() {
    const { username, password, disabledBtn, failed, logged } = this.state;
    return (
      <section>
        { logged && <Redirect to="/cadastros" /> }
        <h2>Faça seu login</h2>
        <form name="loginForm">
          <fieldset>
            <legend>
              Email e Senha
            </legend>
            <label htmlFor="email-input">
              Email:
              <input
                id="email-input"
                type="email"
                name="username"
                value={ username }
                onChange={ this.handleChange }
                required
              />
            </label>
            <label htmlFor="password-input">
              Senha:
              <input
                id="password-input"
                type="password"
                name="password"
                value={ password }
                onChange={ this.handleChange }
                required
              />
            </label>
            <button
              type="button"
              onClick={ this.handleLogin }
              disabled={ disabledBtn }
            >
              Logar
            </button>
          </fieldset>
          { failed && <h4>Falha no login, usuário ou senha inexistente</h4> }
        </form>
      </section>
    );
  }
}

// Login.propTypes = {

// };

export default Login;
