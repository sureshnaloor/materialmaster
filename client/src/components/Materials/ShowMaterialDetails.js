import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import MaterialTransactions from './MaterialTransactions';
import MaterialPurchases from './MaterialPurchases';
import MaterialReceipts from './MaterialReceipts';

const ShowMaterialDetails = (props) => {
    const [matcodes, setMatcodes] = useState([])  
    
    const [matval, setMatval] = useState([]);
    
    const [matspval, setSpmatval] = useState([]);

    const cardMat = {
        border: "1px solid red",
        borderRadius: "10px",
        width: "40vw",
        margin: "0 auto",
        boxShadow: "2px 2px 5px brown",
        backgroundColor:"F5E8ED"
            }

    const cardMat2 = {
        border: "1px solid teal",
        borderRadius: "10px",
        width: "40vw",
        margin: "0 auto",
        boxShadow: "2px 2px 5px green",
        backgroundColor:"F5E8ED",
        paddingRight:"50px",
        paddingLeft:"50px",
        color: "teal",
        fontSize: "16px",
        fontWeight: "900"
                    }
    
    const hilight = {
        color: "teal",
        fontSize: "16px",
        fontWeight: "900"
    }

    const small = {
        fontSize:"10px",
        color:"green",
        fontStyle:"italic"
    }

    const matcontainer = {
        display: "flex",
        flexDirection: "row",
        marginBottom:"50px"

    }
    
    useEffect(() => {
        console.log(props.match.params.id)
        axios.get("http://localhost:5000/api/matcodes/matcode/"+props.match.params.id)
            .then(res => {
                                setMatcodes(res.data.shift())               
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend ${err}`)
            })
    }, []);

    useEffect(() => {
        console.log(props.match.params.id)
        axios.get("http://localhost:5000/api/valstock/mat/"+props.match.params.id)
            .then(res => {
                         setSpmatval((res.data.reduce((pr,cu) => pr+cu.SpecialStkValue,0
                         )))                
            },0)
            .catch(err => {
                console.log(`error: there is some fetch error, check backend ${err}`)
            })
    }, []);

    useEffect(() => {
        console.log(props.match.params.id)
        axios.get("http://localhost:5000/api/completestock/mat/"+props.match.params.id)
            .then(res => {                                             
                            setMatval((res.data.reduce((pr,cu)=> pr+cu.ClosingValue,0.00)) )  
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend ${err}`)
            })
    }, []);
   

    return (
            <>
            <div style ={matcontainer}>
            <div style={cardMat}>
                
            <h5> Material: <span style={hilight}>{matcodes.MaterialDescription} </span> </h5> 
            <h6> Material Code:   <span style={hilight}>  {matcodes.MaterialCode} </span>  </h6>
            <h6> Unit of Measure {matcodes.UOM} </h6>
            <h6> Group: {matcodes.MaterialGroup} </h6>
            <h6> Legacy code: {matcodes.OldMaterialNo} </h6>
            <h6> Active or closed: <span style={hilight}>{matcodes.closeFlag  === "NO" ? 'Active' : 'Closed'} </span></h6> 
            </div>
            <hr/>
            <div style={cardMat2}>
            <h5> Total stock value of the material: {matval} SAR </h5>
            <h5> Special stock value of material out of above: {matspval} SAR </h5>
            </div>
            </div>
            <Router> 
                
            {matcodes.StatusFlag === "Ordered" ? <Link to = {`/purchases/${matcodes.MaterialCode}`}><i className="fas fa-angle-double-right"></i> Purchase order list for the material</Link> : 'No PO in SAP so far' }
            <br />
            <Route path="/purchases/:matcode" children = { <MaterialPurchases />} />
            <hr />            
            
            {matcodes.transactionFlag != null ? <Link to = {`/matissuedocs/${matcodes.MaterialCode}`}><i className="fas fa-angle-double-right"></i> Issuances for the material <span style = {small}> (Some receipts are N-type, so considered in issues) </span></Link> : 'No issuances in SAP so far' }
            <br />
            <Route path="/matissuedocs/:matcode" children = {<MaterialTransactions />} />
            <hr />

            {matcodes.received_flag != null ? <Link to = {`/matreceiptdocs/${matcodes.MaterialCode}`}><i className="fas fa-angle-double-right"></i> Receipts for the material</Link> : 'No Receipts in SAP so far' }
            <br />
            <Route path="/matreceiptdocs/:matcode" children={<MaterialReceipts />} />
            <hr />
             
            
            </Router>
            </>
        )
    }


export default ShowMaterialDetails