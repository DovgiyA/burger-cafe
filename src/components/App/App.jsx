import { useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { store } from '../../store';



function App() {  

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['JetBrains Mono']
      }
    });
   }, []);

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
 
}

export default App;
