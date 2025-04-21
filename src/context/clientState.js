import clientsContext from "./clientContext";
import axios from 'axios';
import React, { useState } from 'react';

const ClientState = (props) => {
  const [clientsList, setclientList] = useState([]);

  const getClient = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/clients', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      setclientList(res.data);
    } catch (error) {
      console.error('Getting clients failed:', error.response?.data || error.message);
    }
  };

  const addClient = async (name, email, phone, address) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/clients',
        {
          name,
          email,
          phone,
          address
        },
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      );

      // Use functional update to avoid stale state issues
      setclientList(prev => prev.concat(res.data));
      console.log('Client added successfully:', res.data);
    } catch (error) {
      console.error('Addition failed:', error.response?.data || error.message);
    }
  };

  

  return (
    <clientsContext.Provider value={{ clientsList, setclientList, getClient, addClient }}>
      {props.children}
    </clientsContext.Provider>
  );
};

export default ClientState;
