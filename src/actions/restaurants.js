import axios from 'axios';
import globalConfig from './index.js'

export const CHECK_DELIVERY_ZONE = 'CHECK_DELIVERY_ZONE'

const ROOT_URL = globalConfig.API
const HEADER = globalConfig.header

export function checkDeliveryZone(addressValues) {
  var address = addressValues.gmaps.formatted_address
  const request = axios.post(`${ROOT_URL}/check_delivery_zone`, {address: address});
  return {
    type: CHECK_DELIVERY_ZONE,
    payload: request
  };
}