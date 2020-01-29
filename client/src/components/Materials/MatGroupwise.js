import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import '../../App.css';
import axios from 'axios';
import MaterialCard from '../Materials/MaterialCard'

const GetSortOrder = (objkey) =>  {  
    return function(a, b) {  
        if (a[objkey] > b[objkey]) {  
            return 1;  
        } else if (a[objkey] < b[objkey]) {  
            return -1;  
        }  
        return 0;   }  
}   

const MatGroupwise = () => {
    const [matcodes, setMatcodes] = useState([])
    const [isLoading, setLoading] = useState(true)
    let {mg} = useParams();

    
    const fetchMaterials = async () => {   
        console.log(mg) 
        const resp = await axios("http://localhost:5000/api/matcodes/matgroup/"+mg)    
        setMatcodes(resp.data.sort(GetSortOrder("MaterialDescription")))          
        setLoading(false)    
    }
    
    useEffect(() => {
        fetchMaterials();
    }, []);

    return (
    <MaterialCard matcodes = {matcodes} />      
    ) 
}
export default MatGroupwise
