import React, { useState, useEffect } from 'react';
import '../../App.css'
import axios from 'axios'

const BarChartComp = () => {
    const [stkval, setData] = useState([])

    var BarChart = require("react-chartjs").Bar;

    useEffect(() => {
        const fetchStkval = async () => {
        const result = await axios("http://localhost:5000/api/completestock/plantVal")
        setData(result.data);
        // console.log(result.data)
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
         <BarChart data = {{
        labels: [...dataid],
        datasets: [{
            label: 'Inv in SAR',
            data: [...dataval],
                     
        }]
    }}  width="400" height="150" />
        </>        
    )   
    
    }
export default BarChartComp