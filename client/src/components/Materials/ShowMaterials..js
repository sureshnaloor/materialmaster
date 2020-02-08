import React, { useState, useEffect } from 'react';
import '../../App.css'
import MaterialCardAll from './MaterialCardAll';
import axios from 'axios';
import Pagination from 'react-js-pagination'; 


const ShowMaterials = () => {   
  
const [matcodes, setMatcodes] = useState([])
const [isLoading, setLoading] = useState(true)
const [activePage, setactivePage] = useState(5)


    const fetchMaterials = async () => {  
      setLoading(true);  
      const resp = await axios(`http://localhost:5000/api/matcodes/all/${activePage}`)    
      setMatcodes(resp.data)   
      setLoading(false)    
    }



const handlePageChange = (pageNumber) => {
    
  setactivePage(pageNumber);
  fetchMaterials(activePage);
  console.log(`active page is ${pageNumber}`);
}

useEffect(() => {
  fetchMaterials(activePage);
}, []);
return (  
    <> 
    
    <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={1000}
          totalItemsCount={11500}
          pageRangeDisplayed={12}
          onChange = {handlePageChange}          
        />
      </div>    

      <MaterialCardAll matcodes = {matcodes} isLoading = {isLoading}/>   
      </>
)
}
export default ShowMaterials