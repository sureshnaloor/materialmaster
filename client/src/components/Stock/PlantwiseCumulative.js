import React, { useState, useEffect } from 'react';
import '../../App.css'
import axios from 'axios'
// import Valcard from './Valcard'
import PieChart from 'react-minimal-pie-chart';

const PlantwiseCumulative = () => {
    const [stkval, setData] = useState([])

    useEffect(() => {
        const fetchStkval = async () => {
        const result = await axios("http://localhost:5000/api/completestock/plantVal")

        setData(result.data);
        // console.log(result.data)
        // console.log(stkval)
        };
        fetchStkval()
    }, []);

    let dataval = []
    stkval.map(val => {
        return dataval.push(val.plantTotal)
    })
    return (    
        <>       
         <PieChart 
                    data={[
                        { title: 'Dammam Stock', value: dataval[0], color: '#E38627' },
                        { title: 'Jubail stock', value: dataval[1], color: '#C13C37' },                        
                    ]}
                    radius='10' cx="15" cy="12"
                />
        <ul>
            {stkval.map(val => (
                <li key={val._id} >
                    {val.plantTotal}
                </li>
            ))}
        </ul>
        </>
        
    )
    
    
    }
export default PlantwiseCumulative

    
    