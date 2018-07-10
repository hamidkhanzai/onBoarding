import { Navigation } from 'react-native-navigation';
import OnBoarding from './modules/OnBoarding';
import Age from './modules/OnBoarding/screens/Age';
import Height from './modules/OnBoarding/screens/Height';
import Confirm from './modules/OnBoarding/screens/Confirm';
export default function registerScreens(store, Provider) {
  Navigation.registerComponent('OnBoarding', () => OnBoarding, store, Provider);
  Navigation.registerComponent('Age', () => Age, store, Provider);
  Navigation.registerComponent('Height', () => Height, store, Provider);
  Navigation.registerComponent('Confirm', () => Confirm, store, Provider);
}
