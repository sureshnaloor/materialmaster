import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FrontPage from './components/FrontPage'

import ShowMaterialGroups from './components/Materials/MaterialGroups'
import MatGroupwise from './components/Materials/MatGroupwise'
import CreateMaterial from './components/Materials/CreateMaterial';
import ShowMaterials from './components/Materials/ShowMaterials.';
import ShowMaterialDetails from './components/Materials/ShowMaterialDetails';
import MaterialTransactions from './components/Materials/MaterialTransactions';
import UpdateMaterialInfo from './components/Materials/UpdateMaterialInfo';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">        
          <h4> JAL SAP Database portal </h4>
      </header>
                
      <div>
          <Route exact path='/' component={FrontPage} />  
          <Route path='/show-materials' component={ShowMaterials} />
          <Route path='/create-material' component={CreateMaterial} />
          <Route path='/edit-material/:id' component={UpdateMaterialInfo} />
          <Route path='/show-material/:id' component={ShowMaterialDetails} />
          <Route path='/transactions/:matcode' component={MaterialTransactions} />
          <Route path='/show-matgroups' exact={true} component={ShowMaterialGroups} />
          <Route path='/show-materialgwise/:mg' exact = {true} component={MatGroupwise} />
      </div>  
    </div>
    </Router>
      )
    }
}

export default App;
