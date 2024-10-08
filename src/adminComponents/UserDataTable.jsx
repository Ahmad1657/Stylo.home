import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const UserDataTable = () => {
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
        paddingRight: '20px',
        width: "100%",
      },
    },
  }

  const [data, setData] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_URL}/user`)
    setData(response.data.users)
  };
  useEffect(() => {
    fetchProducts();
  }, [])

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      style: {
        fontSize: '14px',
        color: '#333',
      },
    },
    {
      name: 'Email',
      selector: row => row.email,
      style: {
        fontSize: '14px',
        color: '#666',
      },
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      style: {
        fontSize: '12px',
        color: '#666',
      },
    },
    {
      name: 'Country',
      selector: row => row.country,
      style: {
        fontSize: '14px',
        color: '#666',
      },
    },
    {
      name: 'Gender',
      selector: row => row.gender,
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
        <div className='adminDataTables' style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }} >
          <h1>User Details</h1>
              <button className='btn buttons mt-4' type='submit'
                onClick={() => navigate('/admin/adminhome/createuser')} 
                       style={{ 
                        backgroundColor: '#e6007e', 
                        color: '#ffffff',
                        margin:'30px', 
                      }}>
                Create New User
              </button>
            
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

export default UserDataTable;



