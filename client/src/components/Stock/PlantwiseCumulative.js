import React, { useState, useEffect } from 'react';
import '../../App.css'
import axios from 'axios'
// import Valcard from './Valcard'
import PieChart from 'react-minimal-pie-chart';

const PlantwiseCumulative = () => {
    const [stkval, setData] = useState([])

    const defaultLabelStyle = {
        fontSize: '8px',
        fontFamily: 'sans-serif',
        fill: '#121212',
            };
    function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }    

    useEffect(() => {
        const fetchStkval = async () => {
        const result = await axios("http://localhost:5000/api/completestock/plantVal")

        if (result.data) setData(result.data);
        // console.log(result.data)
        // console.log(stkval)
        };
        fetchStkval()
    }, []);

    let dataval = []
    let dataid = []
    stkval.map(val => {
        dataval.push(val.plantTotal);
        dataid.push(val._id);
    })
    return (    
        <>       
         <PieChart 
                    data={[
                        { title: `${dataid[0]}  stock`, value: dataval[0], color: '#B0E0EE' },
                        { title: `${dataid[1]}  stock`, value: dataval[1], color: '#B06581' },                        
                    ]}
                    radius='50' cx="50" cy="50" style={{ height: '200px' }} 
                    label
                    labelStyle={defaultLabelStyle}
                />
        
        </>
        
    )
    
    
    }
export default PlantwiseCumulative

    
    