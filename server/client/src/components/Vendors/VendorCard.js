import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const RowVendorStyle = {
  fontFamily: "'Open Sans', sans-serif",
  color: 'Maroon',
  fontSize: '14px',
};

const RowVendorNameStyle = {
  fontFamily: "'Open Sans', sans-serif",
  color: 'brown',
  textAlign: 'left',
  fontSize: '14px',
};
const RowVendorOtherStyle1 = {
  fontFamily: "'Open Sans', sans-serif",
  color: 'blue',
  textAlign: 'left',
  fontSize: '14px',
};

const RowVendorOtherStyle2 = {
  fontFamily: "'Open Sans', sans-serif",
  color: 'teal',
  textAlign: 'left',
  fontSize: '14px',
};

const invTableStyle = {
  position: 'relative',
  left: '5px',
  width: '60vw',
  fontFamily: "'Courgette', cursive",
};

const icon = {
  fontSize: '12px',
};

const VendorCard = (props) => {
  const { vendors, isLoading } = props;

  if (isLoading) {
    return (
      <>
        <img src={require('../../images/2.gif')} alt='loading' />{' '}
        <h5> Loading.....</h5>
      </>
    );
  } else {
    return (
      <>
        <table
          style={invTableStyle}
          className='table table-hover table-striped table-sm'
        >
          <thead className='black white-text'>
            <tr>
              <th scope='col'> </th>
              <th scope='col'>Serial No#</th>
              <th scope='col'>Vendor Code</th>
              <th scope='col'>Vendor Name </th>
              <th scope='col'>Country</th>
              <th scope='col'>City</th>
              <th scope='col'>Telephone</th>
              <th scope='col'>Sales Person</th>
              <th scope='col'>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor._id}>
                {/* <th scope="row"><Link to = {`/show-vendor/${vendor._id}`}><i style={icon} className="fas fa-binoculars"></i> </Link></th> */}
                <td> </td>
                <td style={RowVendorStyle}> {index + 1} </td>
                <td style={RowVendorStyle}>{vendor.VendorNumber}</td>
                <td style={RowVendorNameStyle}>{vendor.Name}</td>
                <td style={RowVendorOtherStyle1}>{vendor.Country}</td>
                <td style={RowVendorOtherStyle2}>{vendor.City}</td>
                <td style={RowVendorOtherStyle1}>{vendor.Telephone}</td>
                <td style={RowVendorOtherStyle2}>{vendor.Salesperson}</td>
                <td style={RowVendorOtherStyle1}>{vendor.MobileNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
};

export default VendorCard;
