import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { DictionaryPage } from './pages/DictionaryPage';
import { PracticePage } from './pages/PracticePage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/lingvary/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/dictionary">
          <DictionaryPage />
        </Route>
        <Route path="/practice">
          <PracticePage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
