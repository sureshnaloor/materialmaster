import React from 'react';

const RowMatcodeStyle = {
  fontFamily: 'Roboto',
  color: 'Maroon',
  fontSize: '12px'
};

const RowMatdescStyle = {
  fontFamily: "'Open Sans', sans-serif",
  color: 'brown',
  textAlign: 'right',
  fontSize: '12px'
};

const invTableStyle = {
  // width: "40vw",
  backgroundColor: 'lightblue',
  color: '#000',
  // padding:"10px 10px 10px",
  // margin: "10px 10px 10px",
  border: '2px solid brown',
  // boxShadow: '2px 2px 5px brown',
  fontFamily: "'Courgette', cursive"
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const MatWBScard = props => {
  const { itemVal, isLoading } = props;

  if (isLoading) {
    return (
      <>
        <img src={require('../../images/2.gif')} alt='loading' />{' '}
        <h5> Generating sale orderwise stock values.....</h5>
      </>
    );
  } else {
    console.log(itemVal[2]);
    return (
      <>
        {' '}
        <table
          style={invTableStyle}
          className='table table-hover table-striped table-sm'
        >
          <thead className='black white-text'>
            <tr>
              <th scope='col'>Serial No#</th>
              <th scope='col'>Project No:</th>
              <th scope='col'>Total Value:</th>
            </tr>
          </thead>
          <tbody>
            {itemVal.map((item, index) => (
              <tr key={index}>
                <td> {index === 0 ? null : index} </td>
                <td style={RowMatcodeStyle}>
                  {index === 0 ? 'TOTAL' : item._id}
                </td>
                <td style={RowMatdescStyle}>{numberWithCommas(item.wbsTot)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
};

export default MatWBScard;
