import { useEffect, useState } from 'react';
import './App.css';
import { FetchData } from './FetchData/FetchData';
import { Layout } from './components/Layout/Layout';
import WebFont from 'webfontloader';


function App() { 

  const [data, setData] = useState();

  useEffect(() => {    
     const loadData = async () => {
      const result = await FetchData();

      setData(result);
     };

     loadData();
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['JetBrains Mono']
      }
    });
   }, []);

  return (
   <Layout data={data} />
  );
 
}

export default App;
