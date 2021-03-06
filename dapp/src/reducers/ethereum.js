import { SET_DALA_BALANCE, SET_ETHER_BALANCE, SET_LOADED, SET_ADDRESS, SET_NETWORK } from '../actions/ethereum';

const initialState = {
  address: '',
  network: {},
  dalaBalance: {},
  etherBalance: {},
  isLoaded: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address
      };
    case SET_DALA_BALANCE:
      return {
        ...state,
        dalaBalance: action.payload.balance
      };
    case SET_ETHER_BALANCE:
      return {
        ...state,
        etherBalance: action.payload.balance
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload.isLoaded
      };
    case SET_NETWORK:
      return {
        ...state,
        network: action.payload.network
      };
    default:
      return state;
  }
};
