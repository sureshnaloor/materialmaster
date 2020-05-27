import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../../App.css';
import MatGroupwise from './MatGroupwise';

import axios from 'axios';

const RowMatgroupStyle = {
	fontFamily: 'Roboto',
	color: 'Maroon',
	fontSize: '14px',
};

const RowMatgroupdescStyle = {
	fontFamily: 'Roboto',
	color: 'brown',
	textAlign: 'left',
	fontSize: '14px',
	fontWeight: '400',
};

const containerAll = {
	margin: '0',
	marginLeft: '10px',
	padding: '0',
	display: 'flex',
	flexDirection: 'row',
};

const invTableStyle1 = {
	float: 'left',
	width: '40vw',
	fontFamily: "'Courgette', cursive",
};

const ShowMaterialGroups = () => {
	const [matgroups, setMatgroups] = useState([]);
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

	const fetchMatgroups = async () => {
		const resp = await axios('http://localhost:5000/api/matcodes/matgroups');
		const matgrlist = resp.data.sort(GetSortOrder('groupCode'));
		setMatgroups(matgrlist);
		setLoading(false);
	};

	useEffect(() => {
		fetchMatgroups(matgroups);
	}, []);

	if (isLoading) {
		return (
			<>
				<img src={require('../../images/2.gif')} alt="loading" />{' '}
				<h5> Loading.....</h5>
			</>
		);
	} else {
		return (
			<div style={containerAll}>
				{' '}
				<table
					style={invTableStyle1}
					className="table table-hover table-striped table-sm"
				>
					<thead className="black white-text">
						<tr>
							{/* <th ></th>  */}
							<th scope="col">Serial No#</th>
							<th scope="col">Group Code</th>
							<th scope="col">Material group name</th>
						</tr>
					</thead>
					<tbody>
						{matgroups.map((mat, index) => (
							<Router>
								<tr key={mat._id}>
									{/* <th scope="row"><Link to = {`/show-materialgwise/${mat.groupCode}`}><i className="fas fa-plus-square"></i> </Link> */}

									{/* </th> */}
									<td> {index + 1} </td>
									<td style={RowMatgroupStyle}>{mat.groupCode}</td>
									<td style={RowMatgroupdescStyle}>
										{mat.groupName.toUpperCase()}
									</td>
								</tr>
								{/* <Switch> <Route path="/show-materialgwise/:mg" children={<MatGroupwise />} /></Switch> */}
							</Router>
						))}
					</tbody>
				</table>
			</div>
		);
	}
};

export default ShowMaterialGroups;
