import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">Home</Route>
          <Route path="/login">Login</Route>
          <Route path="/cadastrar">Cadastrar Cliente</Route>
          <Route path="/cadastros">Clientes Cadastrados</Route>
          <Route>Not found</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
