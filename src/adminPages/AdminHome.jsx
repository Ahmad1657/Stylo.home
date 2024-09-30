import React from 'react'
import UserDataTable from '../adminComponents/UserDataTable';
import ProductDataTable from "../adminComponents/ProductDataTable";
import SubscribeDataTable from "../adminComponents/SubscribeDataTable";
import AdminDataTable from '../adminComponents/AdminDataTable';

const AdminHome = () => {
  return (
    <>
      <UserDataTable />
      &ensp;
      <ProductDataTable />
      &ensp;
      <SubscribeDataTable />
      &ensp;
      <AdminDataTable />
    </>
  )
}

export default AdminHome;
