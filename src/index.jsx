import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Accessoires from './components/Accessoires';

const App = () => (
<div className="container">
  <Header title="Moda"/>
  <Dresses />
  <Shoes />
  <Accessoires />
  <Footer year="2022" author="Czechitas"/>
</div>
);

render(<App />, document.querySelector('#app'));
