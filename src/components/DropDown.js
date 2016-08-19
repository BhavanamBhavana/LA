import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

    export default class DropDownMenuOpenImmediateExample extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
        files: []};
      }


      componentWillMount(){
      axios.get("http://localhost:7770/files").
      then((files)=>{
        //console.log("received ...................." ,files.data);
        var arr = files.data;
        //console.log("before    .... ", files.data);
        var fData = arr.map(function(d){
          return(
          d.substring(26)
        );
        });
        //console.log("chhhhhhhhhhhhhheck ", fData);
        this.setState({
          files: fData
        })
      })
    }
      render() {
        var file = this.state.files;
        var logData = file.map(function (data) {
          return(
              <MenuItem value={data} primaryText={data} />
            );
          });
        return (
          <DropDownMenu  onChange={this.props.handleChange} >
          {logData}
          </DropDownMenu>
          
        );
      }
    }
