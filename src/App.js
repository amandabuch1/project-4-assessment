import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';


class App extends Component {
  
  state={
    selected: "one"
  }
  

  handleSelect = (circle) => {
    this.setState({
      selected: circle
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          
          <CircleSelector 
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />

          <Circles 
            selected={this.state.selected}
          />
          
        </main>
      </div>
    );
  }
}

export default App;