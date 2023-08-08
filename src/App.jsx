import { useEffect } from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import WebFont from 'webfontloader';
import { DataContextProvider } from './services/DataContextProvider';


function App() {  

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['JetBrains Mono']
      }
    });
   }, []);

  return (
    <DataContextProvider>
      <Layout />
    </DataContextProvider>
  );
 
}

export default App;
