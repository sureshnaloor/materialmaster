import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css'

const RowMatcodeStyle = {
    fontFamily: 'Roboto', 
    color: "Maroon",
    fontSize:"14px"  
}

const RowMatdescStyle = {
    fontFamily: "'Open Sans', sans-serif",
    color: "brown",
    textAlign: "left",
    fontSize:"14px"
}

const RowMatUomStyle = {
    fontSize: "14px",
    color:"gray"
}

const invTableStyle2 = {       
    width: "60vw",
    backgroundColor:"lightblue",
    color:"#000",
    padding:"10px 10px 10px",
    margin: "10px 10px 10px",
    border: "5px solid brown",
    boxShadow:"5px 5px 10px",
    fontFamily:"'Courgette', cursive"
}

const MaterialCardAll = (props) =>  {    
    const {matcodes, isLoading} = props  
    if (isLoading) {
        return (<><img src = {require('../../images/2.gif')} alt="loading"/> <h5> Generating the materials list.....</h5></>)
    }
    else
        {
        return (
            <>
                <table style = {invTableStyle2} className="table table-hover table-striped table-sm">
                  <thead className="black white-text">
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Serial No#</th>
                            <th scope="col">Material Code</th>
                            <th scope="col" >Material Description</th>
                            <th scope="col">Unit of Measure</th>                            
                        </tr>
                  </thead>  
                  <tbody>      
                  
                       { matcodes.map((mat, index) =>              
                        
                        <tr key={mat._id}>
                            <th scope="row"><Link to = {`/show-material/${mat._id}`}><i className="fas fa-minus-square"></i> </Link></th>
                            <td> {index+1} </td>
                            <td style={RowMatcodeStyle}>{mat.MaterialCode}</td>
                            <td style={RowMatdescStyle}>{mat.MaterialDescription}</td>
                            <td style={RowMatUomStyle}>{mat.UOM}</td>                            
                        </tr>                          
                        )}
                  </tbody>          
            </table>            
        </>      
        )    
    }
}
export default MaterialCardAll