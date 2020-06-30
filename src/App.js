import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}

function Footer(props) {
  return (
    <p>{props.trademark}</p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="Corey"/>
        <Odometer />
        <Footer trademark="&copy; Corey Marchand"/>
      </header>
    </div>
  );
}


class Odometer extends React.Component{
  constructor(){
    super();
    this.state = {
      odometer : 0,
      incramentByOne : 1,
      incramentByTen : 10,
      incramentByHundered : 100,
      incramentByThousand : 1000,
    }
  }
  changeOdometer(change){
    if (change == 'increase'){
      this.setState({
        odometer: this.state.odometer + this.state.incramentByOne,
      })
    };
    
    if(change == 'decrease'){
      this.setState({
        odometer: this.state.odometer - this.state.incramentByOne,
      })
    }
    if (change == 'increaseByTen'){
      this.setState({
        odometer: this.state.odometer + this.state.incramentByTen,
      })
    };
    
    if(change == 'decreaseByTen'){
      this.setState({
        odometer: this.state.odometer - this.state.incramentByTen,
      })
    }
    if(change == 'increaseByHundred'){
      this.setState({
        odometer: this.state.odometer + this.state.incramentByHundered,
      })
    }
    if(change == 'decreaseByHundred'){
      this.setState({
        odometer: this.state.odometer - this.state.incramentByHundered,
      })
    }
    if(change == 'increaseByThousand'){
      this.setState({
        odometer: this.state.odometer + this.state.incramentByThousand,
      })
    }
    if(change == 'decreaseByThousand'){
      this.setState({
        odometer: this.state.odometer - this.state.incramentByThousand,
      })
    }
    else if(this.state.odometer > 9999){
      this.setState({
        odometer: 0,
      })
    }
    
  }
  render(){
    return(
      <>
        <button onClick={() => this.changeOdometer('increase')}>Increase Miles by 1</button>
        <button onClick={() => this.changeOdometer('decrease')}>Decrease Miles by 1</button>
        <button onClick={() => this.changeOdometer('increaseByTen')}>Increase Miles by 10</button>
        <button onClick={() => this.changeOdometer('decreaseByTen')}>Decrease Miles by 10</button>
        <button onClick={() => this.changeOdometer('increaseByHundred')}>Increase Miles by 100</button>
        <button onClick={() => this.changeOdometer('decreaseByHundred')}>Decrease Miles by 100</button>
        <button onClick={() => this.changeOdometer('increaseByThousand')}>Increase Miles by 1000</button>
        <button onClick={() => this.changeOdometer('decreaseByThousand')}>Decrease Miles by 1000</button>
        <h2>Odometer is ... {this.state.odometer}</h2>
      </>
    )
  }
}

export default App;
