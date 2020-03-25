import React from 'react'
import './FrontPage.css'
import PlantwiseCumulative from './Stock/PlantwiseCumulative'
import ValuePlantwise from './Stock/ValuePlantwise';
// import BarChartComp from './Stock/BarC   hartcomp';
import Top100value from './Stock/Top100value';
import SalesStock from './SpecialStock/SalesStock';
import ProjectStock from './SpecialStock/ProjectStock';


const FrontPage = () => {
    return (
        <div className="containerfp">
            <div className = "invfig"> <ValuePlantwise /></div>
            {/* <div className="invbarchart"> <BarChartComp /> </div> */}
            <div className="invpiechart"> <PlantwiseCumulative /> </div>
             
            <div className="tophundrd"> <Top100value /> </div> 
            <div className="salesstk">  <ProjectStock /> <SalesStock /></div>
            
        </div>
    )
}

export default FrontPage