import React from 'react';
import { Redirect,  HashRouter as  Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { DictionaryPage } from './pages/DictionaryPage';
import { PracticePage } from './pages/PracticePage';
import { PageNotFound } from './pages/PageNotFound';
import {MyDictionaryPage} from "./pages/MyDictionaryPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/dictionary">
          <DictionaryPage />
        </Route>
        <Route path="/mydictionary">
          <MyDictionaryPage />
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
