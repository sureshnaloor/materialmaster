import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MaterialTransactions = (props) => {
    const [matdocs, setMatdocs] = useState([]);

    useEffect(() => {
        // console.log(props.match.params.matcode)
        axios.get("http://localhost:5000/api/matpurchases/"+props.match.params.matcode)
            .then(res => {
                console.log(res.data)
                // console.log('inside axiios fetch')
                setMatdocs(res.data)   
                console.log(matdocs)                           
            })
            .catch(err => {
                console.log(`error: there is some fetch error, check backend, error is: ${err.message}`)
            })
    },[]);

    return (
        <>
         <h5> Material Purchase transactions </h5>
         <h6> Material document: {matdocs.PurchasingDocument} </h6>
         <h6> Quantity purchased: {matdocs. OrderQuantity} </h6>
         <h6> Material description: {matdocs.Material} </h6>
         <h6> Value of material: {matdocs.NetPrice} </h6>
         <h6> Vendor Name: {matdocs.vendorName} </h6>
         
         </>
    )
}

export default MaterialTransactions