import React,{Component} from 'react';
import Comics from './Components/Comics/Comics.jsx';
import ViewBar from './Components/ViewBar.jsx'
import './App.css';


class App extends Component
{

  render(){
    return<div>
      
    <ViewBar/>
    <Comics/>
    </div>
    
  }
}
      

export default App;