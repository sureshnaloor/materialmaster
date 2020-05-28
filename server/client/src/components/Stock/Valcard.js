import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const Valcard = (props) => {
    const {stkval} = props
    // console.log(stkval)
    // console.log(props)
               
        return (
            <div> 
                <PieChart
                    data={[
                        { title: 'Dammam Stock', value: 100, color: '#E38627' },
                        { title: 'Jubail stock', value: 200, color: '#C13C37' },
                        
                    ]}
                />;
             <h4> inside the valcard component </h4>
            </div>
        )  
   
}

export default Valcard