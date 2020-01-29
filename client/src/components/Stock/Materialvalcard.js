import React from 'react';

const RowMatcodeStyle = {
    fontFamily: 'Roboto', 
    color: "Maroon",
    fontSize:"12px"  
}

const RowMatdescStyle = {
    fontFamily: "'Open Sans', sans-serif",
    color: "brown",
    textAlign: "right",
    fontSize:"12px"
}

const RowMatUomStyle = {
    fontSize: "12px",
    color:"gray"
}

const headerStyle = {
    fontSize: "14px",
    color:"gray"
}

const invTableStyle= {       
    width: "40vw",
    backgroundColor:"lightblue",
    color:"#000",
    padding:"10px 10px 10px",
    margin: "10px 10px 10px",
    border: "2px solid brown",
    boxShadow:"2px 2px 5px brown",
    fontFamily:"'Courgette', cursive"
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}   

const Materialvalcard = (props) =>  {    
    const {itemVal, isLoading} = props  
    
    if (isLoading) {
        return (<><img src = {require('../../images/2.gif')} alt="loading"/> <h5> Generating top 100 value items.....</h5></>)
    }
    else {
        return (
            <>  <table style = {invTableStyle} className="table table-hover table-striped table-sm">
                  <thead style = {headerStyle} className="black white-text">
                        <tr>                            
                            <th scope="col">Serial No#</th>
                            <th scope="col">Material Code</th>
                            <th scope="col" >Plant</th>
                            <th scope="col">Unit of Measure</th>
                            <th scope="col">Closing stock</th>
                            <th scope="col">Closing value</th>                            
                        </tr>
                  </thead>  
                  <tbody>                           
                  
                       { itemVal.map((item, index) =>                 
                        
                        <tr key={item._id}>                            
                            <td> {index+1} </td>
                            <td style={RowMatcodeStyle}>{item.Material}</td>
                            <td style={RowMatdescStyle}>{item.Plant}</td>
                            <td style={RowMatUomStyle}>{item.UOM}</td>
                            <td style={RowMatUomStyle}>{item.ClosingStk}</td>
                            <td style={RowMatdescStyle}>{numberWithCommas(parseFloat(item.ClosingValue))}</td>                            
                        </tr>                       
                        )}
                  </tbody>          
            </table>            
        </>      
        )    
    }  }


export default Materialvalcard