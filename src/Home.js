import React, { Component } from 'react';
import { Mug } from 'react-kawaii';
// import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Mug size={170} mood="happy" color="#A6E191" />
      </div>
    );
  }
}

export default Home;
