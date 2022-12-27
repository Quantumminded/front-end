import React, { useState,useEffect } from 'react'
import { client } from './utils/client.mjs'
function ClientProfile() {
  let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const [userData, setuserData] = useState()
  useEffect(() => {
    client(token).get(`/user/profile`).then(response => setuserData(response.data[0]));
},[token]);
  return (
    <>
    {userData && (<><p>{userData.lastName}</p><p>{userData.firstName}</p></>)}
    </>
  )
}

export default ClientProfile