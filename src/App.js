import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Cadastros from './pages/Cadastros';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    // implemente o BrowserRoute, Switch, Route e Provider:
    return (
      <div>
        <Header />
        <Home />
        <Login />
        <Cadastrar />
        <Cadastros />
        <NotFound />
      </div>

    );
  }
}

export default App;
