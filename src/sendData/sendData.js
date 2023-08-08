import { SENDING } from "../constants/constants";
import { responce } from "../utils/props-type";
import PropTypes from 'prop-types';


export const sendData = async (ordersData) => {

    if (Object.keys(ordersData).length !== 0) {    
      return;
    }
   
    try {
      const sendIds = await fetch(SENDING, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: ordersData,
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
    ordersData:  PropTypes.arrayOf(responce).isRequired,    
  };