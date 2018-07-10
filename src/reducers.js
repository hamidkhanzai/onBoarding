import { combineReducers } from 'redux';

import onboardingReducer from './reducers/onBoarding';
export default function getRootReducer() {
  return combineReducers({
    onBoarding: onboardingReducer,
  });
}

