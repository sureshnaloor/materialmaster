import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';

import VendorCard from './VendorCard';

const ShowVendors = () => {
	const [vendors, setVendors] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const GetSortOrder = (objkey) => {
		return function (a, b) {
			if (a[objkey] > b[objkey]) {
				return 1;
			} else if (a[objkey] < b[objkey]) {
				return -1;
			}
			return 0;
		};
	};

	const fetchVendors = async () => {
		const resp = await axios('/api/vendors/all');
		setVendors(resp.data.sort(GetSortOrder('VendorNumber')));
		setLoading(false);
		console.log(resp.data);
	};
	useEffect(() => {
		fetchVendors();
	}, []);

	return <VendorCard vendors={vendors} isLoading={isLoading} />;
};

export default ShowVendors;
