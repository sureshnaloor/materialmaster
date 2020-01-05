import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../App.css'

import axios from 'axios'

const RowMatgroupStyle = {
    fontFamily: 'Roboto', 
    color: "Maroon",
    fontSize:"14px"  
}

const RowMatgroupdescStyle = {
    fontFamily: 'Roboto', 
    color: "Peru",
    textAlign: "left",
    fontSize:"14px"
}

const invTableStyle = {
    position: "relative",
    left: "10%",
    width: "80%"
}

const ShowMaterialGroups = () => {
    const [matgroups, setMatgroups] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchMatgroups = async () => {    
        const resp = await axios("http://localhost:5000/api/matcodes/matgroups")    
        setMatgroups(resp.data)   
        setLoading(false)    
    }

    useEffect(() => {
        fetchMatgroups(matgroups);
    }, [matgroups]);

    
    if (isLoading) {
        return (<><img src = {require('../../images/2.gif')} alt="loading"/> <h5> Loading.....</h5></>)
    }
    else {
    return (
        
        <>
                <table style = {invTableStyle} className="table table-hover table-striped table-sm">
                  <thead className="black white-text">
                        <tr>
                        
                            <th scope="col">Serial No#</th>
                            <th scope="col">Group Code</th>
                            <th scope="col" >Material group name</th>
                           
                        </tr>
                  </thead>  
                  <tbody>                       
                       { matgroups.map((mat, index) =>               
                            <tr key={mat._id}>
                            <th scope="row"><Link to = {`/show-materialgwise/${mat.groupCode}`}><i className="fas fa-binoculars"></i> </Link></th>
                            <td> {index+1} </td>
                            <td style={RowMatgroupStyle}>{mat.groupCode}</td>
                            <td style={RowMatgroupdescStyle}>{mat.groupName}</td>
                            
                        </tr>   
                        )}
                  </tbody>          
            </table>            
        </>      
        
    )}

    }
    
    export default ShowMaterialGroups

