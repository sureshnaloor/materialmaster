import React, { useState, useEffect } from 'react';
import MatStockcard from './MatStockcard';
import axios from 'axios';

const titleStyle = {
  color: 'green',
  border: '1px solid red',
  boxShadow: '2px 2px 5px brown',
  // padding:"10px 10px 10px",
  // margin: "10px 10px 10px",
  backgroundColor: 'lightblue'
  // width: '33vw'
};

const GetSortOrder = objkey => {
  return function(a, b) {
    if (a[objkey] > b[objkey]) {
      return 1;
    } else if (a[objkey] < b[objkey]) {
      return -1;
    }
    return 0;
  };
};

const SalesStock = () => {
  const [itemVal, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchitemval = async () => {
      const result = await axios(
        'http://localhost:5000/api/valstock/saleswise'
      );

      if (result.data) {
        result.data.forEach(item => (item.salesTot = item.salesTot.toFixed(2)));
        // console.log(result.data[9].salesTot);

        setData(result.data.sort(GetSortOrder('_id')));
        setLoading(false);
      }
    };
    fetchitemval();
  }, []);

  return (
    <div>
      <h5 style={titleStyle}> Trading Stock - For all sale orders </h5>
      <MatStockcard itemVal={itemVal} isLoading={isLoading} />
    </div>
  );
};

export default SalesStock;
