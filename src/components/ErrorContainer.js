import React,{Component} from 'react';
import ErrorPaper from './ErrorPaper.js'
import $ from 'jquery'
import axios from 'axios'
import SearchBar from 'material-ui/TextField'
<<<<<<< HEAD
var myData;
var errorArray=[];
var keyNumber=0;
=======
//import DropDown from './DropDown'
  var errorArray = [];
 var keyNumber=0;
var myData;
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6

 export default class ErrorContainer extends React.Component{
   constructor(props){
     super();
     this.state ={
       errorData:[]
     }
   }
<<<<<<< HEAD

  componentDidMount(){
    this.fetchingData();
  }
  componentWillUpdate(){
    this.fetchingData();
  }

   fetchingData(){
=======
   componentWillMount(){
     this.gettingData();
   }
   gettingData(){
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
     var _this = this;
     this.serverRequest =
     axios
       .get(this.props.source)
       .then(function(result) {
<<<<<<< HEAD
         console.log(result.data);

         myData = result.data;
=======
         myData = result.data
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
             errorArray = myData.map(function(error){
              return(<ErrorPaper key={keyNumber++}  error={error}/>)
            })
            _this.setState({errorData:errorArray})
         });
    }

   onChange(e){
     console.log('Filtered text is'+ e.target.value)
<<<<<<< HEAD
=======
    //  console.log(this.state.errorData)
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
     var filteredData = myData.filter(function(value){
       console.log("valueb ois  " ,value);
       return value["status-code"].indexOf(e.target.value)>-1?true:false
     })
     errorArray = filteredData.map(function(error){
      return(<ErrorPaper key={keyNumber++}  error={error}/>)
    })
    this.setState({errorData:errorArray})

  }
     render(){
<<<<<<< HEAD

=======
>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
      return(
        <div>
        <div>
        <SearchBar hintText="Enter status code to search for logs"  onChange = {this.onChange.bind(this)} />
<<<<<<< HEAD
=======

>>>>>>> c8d8a7eb874ce7012352a0a563bf61dab599bea6
        </div>
        <div>
        {this.state.errorData}
        </div>
        </div>
      )
    }
   }
