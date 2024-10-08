import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const SubscribeDataTable = () => {
  const navigate = useNavigate();
  const customStyles = {

    rows: {
      style: {
        minHeight: '55px', // override the row height
        width: "100%",
      },
    },
    headCells: {
      style: {
        paddingLeft: '0px', // override the cell padding for head cells
        paddingRight: '0px',
        width: "100%",
      },
    },
    cells: {
      style: {
        paddingLeft: '0px', // override the cell padding for data cells
        paddingRight: '0px',
        width: "100%",
      },
    },
  }

  const [data, setData] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_URL}/subscribe`)
    setData(response.data.subscribes)
  };
  useEffect(() => {
    fetchProducts();
  }, [])

  const columns = [
    {
      name: 'Email',
      selector: row => row.email,
      style: {
        fontSize: '14px',
        color: '#333',
      },
    },
    {
      name: 'Message',
      selector: row => row.message,
      style: {
        fontSize: '14px',
        color: '#666',
      },
    },
  ];
  return (
    <>
      <div className="container-fluid" 
           style={{
            marginTop:'25px'
           }}>
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'40%'
        }} >
          <h1>Subscriber Details</h1>
        </div>
        <div className="container-fluid" 
             style={{
              border:'1px solid black',
              borderRadius:'25px',
              padding:'25px',
              marginTop:'10px',
              display:'flex', 
              flexDirection:'column', 
             }} >
          <DataTable
            customStyles={customStyles}
            columns={columns}
            data={data}
            pagination
          />
        </div>
      </div>
    </>
  );

}

export default SubscribeDataTable;

