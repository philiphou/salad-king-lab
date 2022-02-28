import './App.css';
import {Component} from 'react';

class App extends Component{
  state={
    spiceLevel:0,
    status:"Nice"
  }
  adjustSpice=(num)=> {
    let level = this.state.spiceLevel + num
    let status = ""
    if (level < 3) {
      status = "Nice"
    } else if (level >= 3 && level < 5) {
      status = "Start mopping your brow"
    } else if (level >= 5 && level < 10) {
      status = "Watch out"
    } else if (level >= 10 && level < 15) {
      status = "Are you sure?"
    } else if (level >=15 && level < 20) {
      status = "All guarantees are void"
    } else if (level >= 20) {
      status = "May cause stomach upset"
    }
    this.setState({spiceLevel: level, status: status})
  }

  render () {
    return (
      <div className="App">
        <h1>Salad King Pepper Chart SPA</h1>
        <button onClick={() => this.adjustSpice(1)}>Add Some Heat</button>
        <button onClick={() => (this.state.spiceLevel>0? this.adjustSpice(-1):console.log("no spice at all"))}>Cool It Off</button>
        <h2>Spice Level: {this.state.spiceLevel} </h2>
        <h2>Status: {this.state.status}</h2>
      </div>
    );
  }
}





export default App;
