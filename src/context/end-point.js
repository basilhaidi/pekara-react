import React, { createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export const EndPointContext = createContext();
export const EndPointProvider = (props) => {
  return (
    <EndPointContext.Provider
      value={{
        functions,
      }}>
      {props.children}
    </EndPointContext.Provider>
  );
};
