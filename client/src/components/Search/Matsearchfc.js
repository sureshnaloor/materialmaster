import React, { useState, useEffect} from 'react';

import '../../App.css';
import axios from 'axios';
import {DebounceInput} from 'react-debounce-input';

const Matsearchfc = () {
    state = {
        searchText: '',
        matcodes: [],
        isLoading: true
    }

    const [searchText, setSearchText ] = useState('')
    const [matcodes,setMatcodes] = useState([])

    onChange = e => {
        this.setState({ searchText: e.target.value });
        axios.get("http://localhost:5000/api/matcodes/matdesc/"+this.state.searchText).then(resp=> this.setState({matcodes:resp.data}))
         };

    
        return (
        <div>
            <DebounceInput
                minLength={5}
                debounceTimeout={1000}
                onChange= {this.execOnChange }/>
 
                <p>Value: {this.state.searchText}</p> 
                { this.state.matcodes.map((mat, index) => 
                 <p key={index}> value of matcode {mat.MaterialCode} </p>
                                
                )}


      </div>
        )
    }


export default Matsearchfc
