import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import logo from './images/JALLogo.png'

import FrontPage from './components/FrontPage'

import ShowMaterialGroups from './components/Materials/MaterialGroups'
import MatGroupwise from './components/Materials/MatGroupwise'
import CreateMaterial from './components/Materials/CreateMaterial';
import ShowMaterials from './components/Materials/ShowMaterials.';
import ShowMaterialDetails from './components/Materials/ShowMaterialDetails';
import MaterialTransactions from './components/Materials/MaterialTransactions';
import UpdateMaterialInfo from './components/Materials/UpdateMaterialInfo';
import ShowVendors from './components/Vendors/ShowVendors';
import ShowVendorDetails from './components/Vendors/ShowVendorDetails';
import PlantwiseCumulative from './components/Stock/PlantwiseCumulative';
import Top100value from './components/Stock/Top100value';
import SalesStock from './components/SpecialStock/SalesStock';
import ProjectStock from './components/SpecialStock/ProjectStock';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">  
          <img src= {logo} /> 
          <h4> JAL SAP Database portal </h4>
          <p> <span>Internal SAP Portal </span>developed for estimation and project teams for select MM reports and transactions</p>
      </header>
      <nav className="mainnav">
          <ul className="mainnav-menu">
              <li className="mainnav-link"> <Link to="/"> <i className="fa fa-home" aria-hidden="true"></i> Home </Link></li>
              <li className="mainnav-link"> <Link to="/show-matgroups"> <i className="far fa-images"></i>Show matgroups </Link></li>
              <li className="mainnav-link"> <Link to="/show-vendors"><i className="fas fa-store-alt"></i> Vendor List </Link></li>
              <li className="mainnav-link"> <Link to="/show-materials"> <i className="fas fa-search"></i>Materials List </Link></li>
              <li className="mainnav-link"> <Link to="/wbswise-inv"> <i className="fas fa-street-view"></i> Project inv value </Link></li>
              <li className="mainnav-link"> <Link to="/saleswise-inv"> <i className="fas fa-street-view"></i> Sales order inv value </Link></li>
          </ul>        
        </nav> 
                
      <div>
        <Switch>
          <Route exact path='/' component={FrontPage} />  
          <Route path='/show-materials' component={ShowMaterials} />
          <Route path='/create-material' component={CreateMaterial} />
          <Route path='/edit-material/:id' component={UpdateMaterialInfo} />
          <Route path='/show-material/:id' component={ShowMaterialDetails} />
          <Route path='/transactions/:matcode' component={MaterialTransactions} />
          <Route path='/show-matgroups' exact={true} component={ShowMaterialGroups} />
          <Route path='/show-materialgwise/:mg' exact = {true} component={MatGroupwise} />

          <Route path='/show-vendors' component={ShowVendors} />
          <Route path='/show-vendor/:id' component={ShowVendorDetails} />

          <Route path='/plantwise-stk' component={PlantwiseCumulative} />
          <Route path='/allmaterial-stk' component = {Top100value} />

          <Route path='/saleswise-inv' component = {SalesStock} />
          <Route path='/wbswise-inv' component = {ProjectStock } />

        </Switch>
        
      </div>  
    </div>
    </Router>
      )
    }
}

export default App;
