import React from 'react';
import './FrontPage.css';
import { Link } from 'react-router-dom';
// import PlantwiseCumulative from './Stock/PlantwiseCumulative';
// import ValuePlantwise from './Stock/ValuePlantwise';
// import BarChartComp from './Stock/BarC   hartcomp';
import Top100value from './Stock/Top100value';
import SalesStock from './SpecialStock/SalesStock';
import ProjectStock from './SpecialStock/ProjectStock';

const FrontPage = (props) => {
  return (
    <div className='containerfp'>
      {/* <div className='invfig'>
        {' '}
        <ValuePlantwise />
      </div> */}
      {/* <div className="invbarchart"> <BarChartComp /> </div>
      <div className='invpiechart'>
        {' '}
        <PlantwiseCumulative />{' '}
      </div> */}
      {props.auth.isAuthenticated() ? (
        <Link to='/profile'> View profile </Link>
      ) : (
        <button onClick={props.auth.login}>Log in</button>
      )}

      <div className='tophundrd'>
        {' '}
        <Top100value />{' '}
      </div>
      <div className='projstk'>
        {' '}
        <ProjectStock />{' '}
      </div>
      <div className='salesstk'>
        <SalesStock />
      </div>
    </div>
  );
};

export default FrontPage;
