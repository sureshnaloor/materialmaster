import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

const RowVendorStyle = {
    fontFamily: 'Roboto', 
    color: "Maroon",
    fontSize:"14px"  
}

const RowVendorNameStyle = {
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

const VendorCard = (props) => {
    const {vendors, isLoading} = props

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
                            <th scope="col">Vendor Code</th>
                            <th scope="col" >Vendor Name </th>
                            <th scope="col">Country</th>
                            <th scope="col">City</th>
                        </tr>
                  </thead>  
                  <tbody>    
                  { vendors.map((vendor, index) =>                 
                  
                  <tr key={vendor._id}>
                      <th scope="row"><Link to = {`/show-vendor/${vendor._id}`}><i className="fas fa-binoculars"></i> </Link></th>
                      <td> {index+1} </td>
                      <td style={RowVendorStyle}>{vendor.VendorNumber}</td>
                      <td style={RowVendorNameStyle}>{vendor.Name}</td>
                      <td>{vendor.Country}</td>
                      <td>{vendor.City}</td>
                  </tr>   
                  )}
            </tbody>          
      </table>                                   
                  
        </>
    )

}
}

export default VendorCard
