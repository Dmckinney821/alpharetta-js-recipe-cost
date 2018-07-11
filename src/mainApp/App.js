import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Textbox from '..components/testbox';
import { recipes } from '../data/recipes';

class App extends Component {
  render() {
    const recipeElements = recipes.map((recipe) => {
      return (
        <div key={}>{recipe.name}</div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          Hello World
          <TextBox text='Hello WOrld' />

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
