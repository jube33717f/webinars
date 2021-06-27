import { combineReducers } from 'redux';

import userReducer from './moduleUser/reducer';
import webinarsReducer from './moduleWebinars/reducer'

// combine all the reducer in here
const rootReducer = combineReducers({
    userReducer: userReducer,
    webinarsReducer: webinarsReducer
});
// export the root reducer state
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;