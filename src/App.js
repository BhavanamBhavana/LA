import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './components/TitleBar.js';
import ErrorContainer  from './components/ErrorContainer.js';
import DropDown from './components/DropDown'

export default class App extends React.Component{
  constructor(props){
    super();
    this.state ={
      url:"http://localhost:7770/logs/access.log"
    }
  }
dropDownChange = (event ,index ,value) =>{
  console.log("request for ........................." ,value);
  this.setState({
    url: "http://localhost:7770/logs/"+value
  });
}
  render(){

    return(

      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <TitleBar title="Logger Analytics Dashboard" />
          <DropDown handleChange = {this.dropDownChange} />
          <ErrorContainer source={this.state.url}/>
        </div>
      </MuiThemeProvider>

    );
  }
}
