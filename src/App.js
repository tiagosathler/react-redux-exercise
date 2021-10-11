import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Cadastros from './pages/Cadastros';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    // Provider:
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/cadastrar"><Cadastrar /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/cadastros"><Cadastros /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
