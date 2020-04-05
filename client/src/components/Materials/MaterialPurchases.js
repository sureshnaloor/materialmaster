import React, {useState, useEffect} from 'react'
// import {useParams} from 'react-router-dom';
import axios from 'axios'

const RowMatcodeStyle = {
    fontFamily: 'Roboto', 
    color: "Maroon",
    fontSize:"14px"  ,
    fontWeight: "900"
}

const RowMatdescStyle = {
    fontFamily: "'Open Sans', sans-serif",
    color: "brown",
    textAlign: "left",
    fontSize:"14px"
}

const RowMatUomStyle = {
    fontSize: "14px",
    color:"gray",
    fontFamily: "'Open Sans', sans-serif",
}

const titleFont = {
    fontSize: "12px",
    fontWeight: "900"
}

const invTableStyle2 = {       
    width: "98vw",
    backgroundColor:"lightblue",
    color:"#000",
    padding:"10px 10px 10px",
    margin: "10px 10px 10px",
    border: "2px solid brown",
    boxShadow:"3px 3px 5px",
    fontFamily:"'Courgette', cursive"
}
const MaterialPurchases = (props) => {
    const [matpurch, setMatdocs] = useState([]);
    // let {matcode }= useParams()
    let {matcode } = props
    useEffect(() => {        
        axios.get("http://localhost:5000/api/matpurchases/"+matcode)
            .then(res => {
                console.log(res.data)
                // console.log('inside axiios fetch')
                setMatdocs(res.data)   
                // console.log(matdocs)                           
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend, error is: ${err.message}`)
            })
    },[matcode]);

    return (
        
         <>
                <table style = {invTableStyle2} className="table table-hover table-striped table-sm">
                  <thead className="black white-text" style ={titleFont}>
                        <tr>
                            
                            <th scope="col">Serial No#</th>
                            <th scope="col">Purchase Order:</th>
                            <th scope="col">PO date:</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col" >Material code</th>
                            <th scope="col">Material short description</th>
                            <th scope="col">Order quantity</th>
                            <th scope="col">Order UOM</th>
                            <th scope="col">Net Price</th>
                            <th scope="col">Currency</th>
                            
                        </tr>
                  </thead>  
                  <tbody>                           
                  
                       { matpurch.map((mat, index) =>                 
                        
                        <tr key={mat._id}>
                            
                            <td> {index+1} </td>
                            <td style={RowMatcodeStyle}>{mat.PurchasingDocument}</td>
                            <td style={RowMatcodeStyle}>{mat.DocumentDate}</td>
                            <td style={RowMatdescStyle}>{mat.vendorName}</td>
                            <td style={RowMatUomStyle}>{mat.Material}</td>
                            <td style={RowMatUomStyle}>{mat.ShortText}</td>
                            <td style={RowMatUomStyle}>{mat.OrderQuantity}</td>
                            <td style={RowMatUomStyle}>{mat.OrderUOM}</td>
                            <td style={RowMatcodeStyle}>{mat.NetPrice}</td>
                            <td style={RowMatcodeStyle}>{mat.Currency}</td>               
                            
                        </tr>   
                        
                        
                        )}
                  </tbody>          
            </table>            
         
         </>
    )
}

export default MaterialPurchases