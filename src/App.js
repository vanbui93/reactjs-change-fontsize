import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 14
    }
  }
  onSetColor = (params) => {
    console.log(params);
    this.setState({ color: params })
  }
  onChangeSize = (size) => {
    // console.log(size);
    if(this.state.fontSize + size >=8 && this.state.fontSize + size <=36){
      this.setState({
        fontSize: this.state.fontSize + size // -2 +2
      })
    }
  }
  onResetDefault = (value) => {
    if(value = true){
      this.setState({
        color: 'red',
        fontSize: 14
      })
    }
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ColorPicker color = {this.state.color} onReciveColor = {this.onSetColor}/>
          <div className="col-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize = {this.onChangeSize}/>
            <br />
            <Reset onResetDefault = { this.onResetDefault }/>
          </div>
        </div>
        <Result color={ this.state.color } fontSize={this.state.fontSize}/>
      </div>
    );
  }
}