import React, { useState, useEffect } from 'react';
import '../../App.css'
import axios from 'axios'

const ValuePlantwise = () => {
    const [stkval, setData] = useState([])      

    useEffect(() => {
        const fetchStkval = async () => {
        const result = await axios("http://localhost:5000/api/completestock/plantVal")

        if(result.data)setData(result.data);
        // console.log(result.data)
        // console.log(stkval)
        };
        fetchStkval()
    }, []);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const plantStyle = {
        color: 'goldenrod',
        fontFamily: "'Open Sans', sans-serif",
    }

    const invStyle = {
        color: 'green',
        fontFamily: "'Open Sans', sans-serif",
    }

    const hdrStyle = {
        textDecoration: 'underline'
    }

    return (
        <div>
            <h6 style = {hdrStyle}> Inventory Value in SAR (Dec 19): </h6>
            {stkval.map(n => <>  <p style = {plantStyle}> Plant: {n._id}</p>  <p style = {invStyle}> Value of Inv: {numberWithCommas(parseInt(n.plantTotal))} </p></>)}
        </div>
    )}

export default ValuePlantwise