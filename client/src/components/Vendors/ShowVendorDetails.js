import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

const ShowVendorDetails = (props) => {
  const [vendor, setVendor] = useState([]);
  let { vendorcode } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/vendors/code/${vendorcode.toString()}`)
      .then((res) => {
        // console.log(res.data)
        setVendor(res.data.shift());
      })
      .catch((err) => {
        console.log(`error: there is some fetch error, check backend`);
      });
  }, [vendorcode]);
  console.log(vendor);

  return <>{vendor.Name}</>;
};

export default ShowVendorDetails;
