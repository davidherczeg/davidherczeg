import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { Pane } from 'evergreen-ui';
import heroImg from '../assets/imgs/hero.jpg';

function App() {
  return (
    <Pane>
      <Navbar />
      <Pane>
        <img src={heroImg} width='100%' height='auto' alt='...' />
        <Pane></Pane>
      </Pane>
    </Pane>
  );
}

App.propTypes = {};

export default App;
