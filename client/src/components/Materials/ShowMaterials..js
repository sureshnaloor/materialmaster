import React, { useState, useEffect } from 'react';
import '../../App.css'
import MaterialCardAll from './MaterialCardAll';
import axios from 'axios'

const ShowMaterials = () => {
    const [matcodes, setMatcodes] = useState([])
    const [isLoading, setLoading] = useState(true)

const fetchMaterials = async () => {    
    const resp = await axios("http://localhost:5000/api/matcodes/all")    
    setMatcodes(resp.data)   
    setLoading(false)    
}

useEffect(() => {
    fetchMaterials();
}, []);

return (   
    <MaterialCardAll matcodes = {matcodes} isLoading = {isLoading}/>       
)
}
export default ShowMaterials