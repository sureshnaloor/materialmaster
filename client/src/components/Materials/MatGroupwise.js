import React, {useState, useEffect} from 'react';

import '../../App.css';
import axios from 'axios';
import MaterialCard from '../Materials/MaterialCard'

const MatGroupwise = (props) => {
    const [matcodes, setMatcodes] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    const fetchMaterials = async () => {   
        console.log(props.match.params.mg) 
        const resp = await axios("http://localhost:5000/api/matcodes/matgroup/"+props.match.params.mg)    
        setMatcodes(resp.data)          
        setLoading(false)    
    }
    
    useEffect(() => {
        fetchMaterials();
    }, []);

    return (
    <MaterialCard matcodes = {matcodes} isLoading = {isLoading}/>      
    ) 
}
export default MatGroupwise
