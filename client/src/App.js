import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Mainnav from './Mainnav';

import FrontPage from './components/FrontPage'

import ShowMaterialGroups from './components/Materials/MaterialGroups'
import MatGroupwise from './components/Materials/MatGroupwise'
import CreateMaterial from './components/Materials/CreateMaterial';
import ShowMaterials from './components/Materials/ShowMaterials.';
import ShowMaterialDetails from './components/Materials/ShowMaterialDetails';
import MaterialPurchases from './components/Materials/MaterialPurchases';
import UpdateMaterialInfo from './components/Materials/UpdateMaterialInfo';
import ShowVendors from './components/Vendors/ShowVendors';
import ShowVendorDetails from './components/Vendors/ShowVendorDetails';
import PlantwiseCumulative from './components/Stock/PlantwiseCumulative';
import Top100value from './components/Stock/Top100value';
import SalesStock from './components/SpecialStock/SalesStock';
import ProjectStock from './components/SpecialStock/ProjectStock';
import MaterialTransactions from './components/Materials/MaterialTransactions';
import MaterialReceipts from './components/Materials/MaterialReceipts';
import Matsearchfc from './components/Search/Matsearchfc';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Header />
      <Mainnav />
                
      <div>
        <Switch>
          <Route exact path='/' component={FrontPage} />  
          <Route path='/show-materials' component={ShowMaterials} />
          <Route path='/create-material' component={CreateMaterial} />
          <Route path='/edit-material/:id' component={UpdateMaterialInfo} />
          <Route path='/show-material/:id' component={ShowMaterialDetails} />
          <Route path='/purchases/:matcode' component={MaterialPurchases} />
          <Route path='/matissuedocs/:matcode' component={MaterialTransactions} />
          <Route path='/matreceiptdocs/:matcode' component={MaterialReceipts} />

          <Route path='/show-matgroups' exact={true} component={ShowMaterialGroups} />
          <Route path='/show-materialgwise/:mg' exact = {true} component={MatGroupwise} />          

          <Route path='/show-vendors' component={ShowVendors} />
          <Route path='/show-vendor/:id' component={ShowVendorDetails} />

          <Route path='/plantwise-stk' component={PlantwiseCumulative} />
          <Route path='/allmaterial-stk' component = {Top100value} />

          <Route path='/saleswise-inv' component = {SalesStock} />
          <Route path='/wbswise-inv' component = {ProjectStock } />

          <Route path='/matsearch' exact = {true} component={Matsearchfc} />
        </Switch>
        
      </div>  
    </div>
    </Router>
      )
    }
}

export default App;
