import React, {useEffect, useState} from "react";
import axios from "axios";

import {UserTableComponent} from "../.yalc/my-lib-ui";
import {API} from "../utils/api";
import useAuth from "../hook/useAuth";
const UserTable = () => {
  const [futureUsers, setFutureUsers] = useState([]);
  const {token} = useAuth();

  useEffect(() => {
    if (!token) return;
    fetchFutureUsers();
  }, [token]);

  const handleValidate = (data: any) => {
    if (!token) return;
    axios.get(API.VALIDATION +`/${data.id}`
      , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(() => {
        fetchFutureUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const fetchFutureUsers = () => {
    axios.get(API.FUTURE_USERS,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
          setFutureUsers(response.data);
        }
      );
  }
  return (
    <UserTableComponent onValidate={handleValidate} data={futureUsers}/>
  );
}

export default UserTable;