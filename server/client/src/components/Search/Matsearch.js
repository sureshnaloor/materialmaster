import React, { Component } from 'react';

import '../../App.css';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

class Matsearch extends Component {
	state = {
		searchText: '',
		matcodes: [],
		isLoading: true,
	};

	onChange = (e) => {
		this.setState({ searchText: e.target.value });
		axios
			.get('/api/matcodes/matdesc/' + this.state.searchText)
			.then((resp) => this.setState({ matcodes: resp.data }));
	};

	render() {
		return (
			<div>
				<DebounceInput
					minLength={5}
					debounceTimeout={1000}
					onChange={this.onChange}
				/>

				<p>Value: {this.state.searchText}</p>
				{this.state.matcodes.map((mat, index) => (
					<p key={index}> value of matcode {mat.MaterialCode} </p>
				))}
			</div>
		);
	}
}

export default Matsearch;
