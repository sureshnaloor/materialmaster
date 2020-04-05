import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import MaterialTransactions from './MaterialTransactions';
import MaterialPurchases from './MaterialPurchases';
import MaterialReceipts from './MaterialReceipts';

const ShowMaterialDetailssrch = (props) => {
    const [matcodes, setMatcodes] = useState([])  
    
    const [matval, setMatval] = useState([]);
    
    const [matspval, setSpmatval] = useState([]);

    let {matcode } = props

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
        color: "black",
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
        // console.log(props.match.params.id)
        axios.get(`http://localhost:5000/api/matcodes/matcode/${matcode.toString()}`)
            .then(res => {
                                setMatcodes(res.data.shift())               
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend ${err}`)
            })
    }, [matcode]);

    useEffect(() => {
        // console.log(props.match.params.id)
        axios.get(`http://localhost:5000/api/valstock/mat/${matcode.toString()}`)
            .then(res => {
                         setSpmatval((res.data.reduce((pr,cu) => pr+cu.SpecialStkValue,0
                         )))                
            },0)
            .catch(err => {
                console.log(`error: there is some fetch error, check backend ${err}`)
            })
    }, [matcode]);

    useEffect(() => {
        console.log(props)
        axios.get(`http://localhost:5000/api/completestock/mat/${matcode.toString()}`)
            .then(res => {                                             
                            setMatval((res.data.reduce((pr,cu)=> pr+cu.ClosingValue,0.00)) )  
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend ${err}`)
            })
    }, [matcode]);
   

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
            <h6> Total stock value of the material: <span style={hilight} >{matval} SAR</span> </h6>
            <h6> Special stock value of material out of above: <span style={hilight}>{matspval} SAR </span></h6>
            </div>
            </div>
           
            </>
        )
    }


export default ShowMaterialDetailssrch