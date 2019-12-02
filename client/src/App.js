import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateMaterial from './components/CreateMaterial';
import ShowMaterialList from './components/ShowMaterialList';
import ShowMaterialDetails from './components/ShowMaterialDetails';
import UpdateMaterialInfo from './components/UpdateMaterialInfo';
import MaterialTransactions from './components/MaterialTransactions'
import FrontPage from './components/FrontPage'

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">        
          <h3> JAL SAP Database portal </h3>
      </header>
                
      <div>
          <Route exact path='/' component={FrontPage} />  
          <Route path='/show-materials' component={ShowMaterialList} />
          <Route path='/create-material' component={CreateMaterial} />
          <Route path='/edit-material/:id' component={UpdateMaterialInfo} />
          <Route path='/show-material/:id' component={ShowMaterialDetails} />
          <Route path='/transactions/:matcode' component={MaterialTransactions} />
      </div>  
    </div>
    </Router>
      )
    }
}

export default App;
