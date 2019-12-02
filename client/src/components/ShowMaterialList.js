// component to list all materials in our database

import React, { useState, useEffect } from 'react';
import '../App.css'

import MaterialCard from './MaterialCard';

import axios from 'axios'
// import { Link } from 'react-router-dom'
// import { List } from 'react-virtualized';
// import MaterialCard from './MaterialCard'

const ShowMaterialList = () =>  {

    const [matcodes, setMatcodes] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:5000/api/matcodes/all")
            .then(res => {
                setMatcodes(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend`)
            })
    }, []);

    return (
        <MaterialCard matcodes = {matcodes} isLoading = {isLoading} />
    )
}
export default ShowMaterialList
