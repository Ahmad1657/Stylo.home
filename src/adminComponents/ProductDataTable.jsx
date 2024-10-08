import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const ProductDataTable = () => {
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
    const response = await axios.get(`${process.env.REACT_APP_URL}/product`)
    setData(response.data.products)
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
      name: 'Description',
      selector: row => row.description,
      style: {
        fontSize: '14px',
        color: '#666',
      },
    },
    {
      name: 'Category',
      selector: row => row.category,
      style: {
        fontSize: '12px',
        color: '#666',
      },
    },
    {
      name: 'Image',
      selector: row => row.image,
      style: {
        fontSize: '14px',
        color: '#666',
      },
    },
    {
      name: 'Price',
      selector: row => row.price,
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
          <h1>Product Details</h1>
              <button className='btn buttons mt-4' type='submit'
                onClick={() => navigate('/admin/adminhome/productupload')} 
                       style={{ 
                        backgroundColor: '#e6007e', 
                        color: '#ffffff',
                        margin:'30px', 
                      }}>
                Create New Product
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

export default ProductDataTable;



