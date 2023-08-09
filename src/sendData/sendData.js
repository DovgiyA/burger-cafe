import { SENDING } from "../constants/constants";
import { response } from "../utils/props-type";
import PropTypes from 'prop-types';


export const sendData = async (ordersData) => {

    if (!ordersData.length) {    
      return;
    }
    const jsonForSending = JSON.stringify({ingredients: ordersData});
    
    try {
      const sendIds = await fetch(SENDING, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonForSending,
      });

      const resultToJSON = await sendIds.json();

      if (sendIds.ok) {
       
        return resultToJSON;
      }

    } catch (e) {
      return Promise.reject(e);
    }
  }

  sendData.propTypes = {    
    ordersData:  PropTypes.arrayOf(response).isRequired,    
  };