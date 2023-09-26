import axios from 'axios';
import React, { createContext } from 'react';
import Cookies from 'js-cookie';

export const Context = createContext();
export const ContextProvider = (props) => {
  let token = Cookies.get('token');
  const AxiosInterceptor = axios.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const functions = {
    AxiosInterceptor,
  };

  return (
    <Context.Provider
      value={{
        functions,
      }}>
      {props.children}
    </Context.Provider>
  );
};
