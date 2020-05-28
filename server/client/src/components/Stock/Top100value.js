import React, { useState, useEffect } from 'react';
import Materialcard from './Materialvalcard';
import axios from 'axios';

const titleStyle = {
	color: 'green',
	border: '1px solid red',
	boxShadow: '2px 2px 5px brown',
	// padding:"10px 10px 10px",
	// margin: "10px 10px 10px",
	backgroundColor: 'lightblue',
	// width: '33vw'
};

const Top100value = () => {
	const [itemVal, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchitemval = async () => {
			const result = await axios('/api/completestock/all');

			if (result.data) {
				setData(result.data.slice(0, 100));
				setLoading(false);
			}
		};
		fetchitemval();
	}, []);

	return (
		<div>
			<h5 style={titleStyle}> Top 100 value materials </h5>
			<Materialcard itemVal={itemVal} isLoading={isLoading} />
		</div>
	);
};

export default Top100value;
