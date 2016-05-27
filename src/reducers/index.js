// Set up your root reducer here...
 import { combineReducers } from 'redux';


 export default appoloClient => {
    return combineReducers({
      //other reducers
      appolo: appoloClient.reducer()
    });
 };
