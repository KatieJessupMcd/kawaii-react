import React, { Component } from 'react';
import { Mug } from 'react-kawaii';
// import './Home.css';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      moods: ["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]
    }
    this.randomMood = this.randomMood.bind(this); 
  }
  
  randomMood(){
    let randomIdx = Math.floor(Math.random() * this.state.moods.length)
    let mood = this.state.moods[randomIdx]; 
    return mood; 
  }
  
  render() {
    return (
      <div className="Home">
        <Mug size={170} mood={this.randomMood()} color="#A6E191" />
      </div>
    );
  }
}

export default Home;
