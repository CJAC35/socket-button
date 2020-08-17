import React from 'react';
import './App.css';
import {socket} from './client-socket.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'hello world'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    socket.on('change-text', (data) => this.setState({text: data}));
  }

  handleClick(event) {
    socket.emit('test', 'a user has clicked the button :o');
    this.setState({text: 'you clicked the button :o'});
    console.log('it should have emitted something');
  }

  render() {
    return (
      <>
        <h1 className="hello"> {this.state.text} </h1>
        <div className="button" onClick={this.handleClick}> CLICK HERE! </div>
      </>
    );
  }
}


  

export default App;
