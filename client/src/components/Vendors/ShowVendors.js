import React, {useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';

import VendorCard from './VendorCard';

const ShowVendors = () => {
    const [vendors, setVendors] = useState([])
    const [isLoading, setLoading ] = useState(true)

    const fetchVendors = async () => {
        const resp = await axios("http://localhost:5000/api/vendors/all")
        setVendors(resp.data)
        setLoading(false)
        console.log(resp.data)
    }
    useEffect(() => {
        fetchVendors()
    },[])

    return (
        <VendorCard vendors = {vendors} isLoading={isLoading} />
        )
}

export default ShowVendors
