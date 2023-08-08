import { useEffect, useMemo, useState } from "react";
import { FetchData } from "../FetchData/FetchData";
import { DataContext } from "./dataContext";
import PropTypes from 'prop-types';

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {    
    const loadData = async () => {
     const result = await FetchData();
      
     setData(result);
    };

    loadData();
 }, []);

  const contextValue = useMemo(() => {
    if (!data) {
      return;
    }
    return { data, setData }
  }, [data]); 

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

DataContextProvider.propTypes = {    
  children:  PropTypes.element.isRequired,    
};