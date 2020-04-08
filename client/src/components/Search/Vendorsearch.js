import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import useDebounce from '../../utility/use-debounce';
import ShowVendorDetails from '../Vendors/ShowVendorDetails';

const Vendorsearch = () => {
  // state and setter for search text
  const [searchTerm, setSearchTerm] = useState('');
  // state and setter for search results
  const [results, setResults] = useState([]);
  // state and setter for spinner
  const [isSearching, setIsSearching] = useState(false);

  // state and setter for selected option matcode
  const [vendorcode, setVendorcode] = useState('');

  // Now we call our hook, passing in the current searchTerm value.
  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  // Otherwise, it will return the previous value of searchTerm.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  function searchCharacters(search) {
    return (
      axios
        .get('http://localhost:5000/api/vendors/name/' + search)
        .then((r) => r.data)
        //   .then((d) => console.log(d))
        .catch((error) => {
          console.error(error);
          return [];
        })
    );
  }
  // Here's where the API call happens
  // We use useEffect since this is an asynchronous action
  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        setIsSearching(true);
        // Fire off our API call
        searchCharacters(debouncedSearchTerm).then((results) => {
          // Set back to false since request finished
          setIsSearching(false);
          // Set results state
          setResults(results);
          console.log(results);
        });
      } else {
        setResults([]);
      }
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );

  return (
    <div className='vendorsearch'>
      <input
        type='text'
        placeholder='Search Vendor'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isSearching && <div>Searching ...</div>}
      <hr />
      <select
        onChange={(e) => {
          setVendorcode(e.target.value);
          console.log(e.target.value);
        }}
        id='vendor'
      >
        {results.map((result, index) => (
          <option key={index} value={result.VendorNumber}>
            {' '}
            {result.VendorNumber} ::: {result.Name}{' '}
          </option>
        ))}
      </select>{' '}
      <hr />
      <ShowVendorDetails vendorcode={vendorcode} /> <hr />
    </div>
  );
};

export default Vendorsearch;
