import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

const ShowMaterialDetails = (props) => {
    const [matcodes, setMatcodes] = useState([])  
    
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
            <h5> Material: {matcodes.MaterialDescription} </h5> 
            <h6> Material Code:     {matcodes.MaterialCode} </h6>
            <h6> Unit of Measure {matcodes.UOM} </h6>
            <h5> Group: {matcodes.MaterialGroup} </h5>
            <h6> Legacy code: {matcodes.OldMaterialNo} </h6>
            <h6> Active or closed: {matcodes.closeFlag  === "NO" ? 'Active' : 'Closed'} </h6>
            <hr/>
            <h5> Transacted in SAP? {matcodes.transactionFlag == null ? "Not transacted" : "Yes transacted"} </h5>  <Link to = {`/transactions/${matcodes.MaterialCode}`}><i className="fas fa-angle-double-right"></i> </Link> Click to get details of transactions 
            <h5> PO issued in SAP? {matcodes.StatusFlag == null ? "Not ordered" : "Yes ordered"} </h5> <span className="shord"> <i className="fas fa-angle-double-right"></i> Click to get details of Purchase orders </span>

            </>
        )
    }


export default ShowMaterialDetails