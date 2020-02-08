import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
const MaterialReceipts = (props) => {
    const [matdocs, setMatdocs] = useState([]);
    let {matcode } = useParams()
    useEffect(() => {        
        axios.get("http://localhost:5000/api/matdocs/" + matcode)
            .then(res => {
                console.log(res.data)
                // console.log('inside axiios fetch')
                let fildata = []
                for (let i=0; i<res.data.length; i++){
                    if (res.data[i].MovementType === '101' || res.data[i].MovementType === '105'){
                        console.log('caught')
                        fildata.push(res.data[i])
                    }
                }
                // console.log(fildata)
                setMatdocs(fildata)   
                // console.log(matdocs)                           
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend, error is: ${err.message}`)
            })
    },[]);

    return (        
         <> <table style = {invTableStyle2} className="table table-hover table-striped table-sm">
                  <thead className="black white-text" style ={titleFont}>
                        <tr>                            
                            <th scope="col">Serial No#</th>
                            <th scope="col">Material document:</th>
                            <th scope="col">Movement type:</th>
                            <th scope="col">Posting date:</th>
                            <th scope="col">Cost element</th>
                            <th scope="col"> Material </th>
                            <th scope="col" >Quantity</th>
                            <th scope="col">UOM</th>
                            <th scope="col">Value</th>                           
                        </tr>
                  </thead>  
                  <tbody>                    
                  
                       { matdocs.map((mat, index) =>                 
                        
                        <tr key={mat._id}>                            
                            <td> {index+1} </td>
                            <td style={RowMatcodeStyle}>{mat.MatDocument}</td>
                            <td style={RowMatcodeStyle}>{mat.MovementType}</td>
                            <td style={RowMatdescStyle}>{mat.PostingDate.substr(0,10)}</td>
                            <td style={RowMatUomStyle}> {mat.WBSElement ? mat.WBSElement : mat.Network ? mat.Network : mat.SalesOrder? mat.SalesOrder: mat.CostCenter} </td> 
                            <td style={RowMatUomStyle}>{mat.Material}</td>
                            <td style={RowMatUomStyle}>{mat.Qty}</td>
                            <td style={RowMatUomStyle}>{mat.UOM}</td>
                            <td style={RowMatUomStyle}>{mat.Value}</td>                          
                        </tr>                    
                        )}
                  </tbody>          
            </table>          
         </>
    )
}

export default MaterialReceipts