import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import MaterialTransactions from './MaterialTransactions';

const ShowMaterialDetails = (props) => {
    const [matcodes, setMatcodes] = useState([])  

    const cardMat = {
        border: "1px solid red",
        borderRadius: "10px",
        width: "50vw",
        margin: "0 auto",
        boxShadow: "2px 2px 5px brown",
        backgroundColor:"F5E8ED"
            }
    const hilight = {
        color: "teal",
        fontSize: "16px",
        fontWeight: "900"
    }
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/matcodes/"+props.match.params.id)
            .then(res => {
                // console.log(res.data)
                setMatcodes(res.data)
                
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend ${err}`)
            })
    }, []);

    return (
            <>
            <div style={cardMat}>
            <h5> Material: <span style={hilight}>{matcodes.MaterialDescription} </span> </h5> 
            <h6> Material Code:   <span style={hilight}>  {matcodes.MaterialCode} </span>  </h6>
            <h6> Unit of Measure {matcodes.UOM} </h6>
            <h5> Group: {matcodes.MaterialGroup} </h5>
            <h6> Legacy code: {matcodes.OldMaterialNo} </h6>
            <h6> Active or closed: <span style={hilight}>{matcodes.closeFlag  === "NO" ? 'Active' : 'Closed'} </span></h6> 
            </div>
            <hr/>
            <Router>
            {matcodes.StatusFlag === "Ordered" ? <Link to = {`/purchases/${matcodes.MaterialCode}`}><i className="fas fa-angle-double-right"></i> Purchase order list for the material</Link> : 'No PO in SAP so far' }
            <br />
            {matcodes.transactionFlag != null ? <Link to = {`/matissuedocs/${matcodes.MaterialCode}`}><i className="fas fa-angle-double-right"></i> Issuances for the material</Link> : 'No issuances in SAP so far' }
            <br />
            <Switch> <Route path="/matissuedocs/:matcode" children={<MaterialTransactions />} /></Switch>
            {matcodes.received_flag != null ? <Link to = {`/matreceiptdocs/${matcodes.MaterialCode}`}><i className="fas fa-angle-double-right"></i> Receipts for the material</Link> : 'No Receipts in SAP so far' }
            </Router>
            </>
        )
    }


export default ShowMaterialDetails