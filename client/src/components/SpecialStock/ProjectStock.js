import React, { useState, useEffect } from 'react';
import MatWBScard from './MatWBSCard';
import axios from 'axios'
const titleStyle = {
    color: 'green',
    border: '1px solid red',
    boxShadow: '2px 2px 5px brown',
    // padding:"10px 10px 10px",
    // margin: "10px 10px 10px",
    backgroundColor:"lightblue",
    width: '30vw'
}
const GetSortOrder = (objkey) =>  {  
    return function(a, b) {  
        if (a[objkey] > b[objkey]) {  
            return 1;  
        } else if (a[objkey] < b[objkey]) {  
            return -1;  
        }  
        return 0;   }  
}   
const ProjectStock = () => {
    const [itemVal, setData] = useState([]) 
    const [isLoading, setLoading] = useState(true);     

    useEffect(() => {
        const fetchitemval = async () => {
        const result = await axios("http://localhost:5000/api/valstock/wbswise")

        if(result.data){
            result.data.forEach(item => item.wbsTot=item.wbsTot.toFixed(2))
            // console.log(typeof(result.data[9].wbsTot)      ) 
            
            setData(result.data.sort(GetSortOrder("_id")));
            setLoading(false);    
        }    
        };
        fetchitemval()
    }, []);   

    return (
        <div>
            <h5 style = {titleStyle}> Project Stock - For all Project WBS </h5>
            <MatWBScard itemVal = {itemVal} isLoading = {isLoading} />
            
        </div>
    )}

export default ProjectStock