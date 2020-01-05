import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

const RowMatcodeStyle = {
    fontFamily: 'Roboto', 
    color: "Maroon",
    fontSize:"14px"  
}

const RowMatdescStyle = {
    fontFamily: 'Roboto', 
    color: "Peru",
    textAlign: "left",
    fontSize:"14px"
}

const invTableStyle = {
    position: "relative",
    left: "30%",
    width: "60%"
}

const MaterialCard = (props) =>  {    
    const {matcodes, isLoading} = props  
        if (isLoading) {
            return (<><img src = {require('../../images/2.gif')} alt="loading"/> <h5> Loading.....</h5></>)
        }
        else {
        return (
            <>
                <table style = {invTableStyle} className="table table-hover table-striped table-sm">
                  <thead className="black white-text">
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Serial No#</th>
                            <th scope="col">Material Code</th>
                            <th scope="col" >Material Description</th>
                            <th scope="col">Unit of Measure</th>
                            <th scope="col">Material Group</th>
                        </tr>
                  </thead>  
                  <tbody>                           
                  
                       { matcodes.map((mat, index) =>                 
                  
                        <tr key={mat._id}>
                            <th scope="row"><Link to = {`/show-material/${mat._id}`}><i className="fas fa-binoculars"></i> </Link></th>
                            <td> {index+1} </td>
                            <td style={RowMatcodeStyle}>{mat.MaterialCode}</td>
                            <td style={RowMatdescStyle}>{mat.MaterialDescription}</td>
                            <td>{mat.UOM}</td>
                            <td>{mat.MaterialGroup}</td>
                        </tr>   
                        )}
                  </tbody>          
            </table>            
        </>      
        )    
    }
}

export default MaterialCard