import { Provider } from 'react-redux';
import { Navigation, NativeEventsReceiver } from "react-native-navigation";

import getStore from './store';
import registerScreens from './screens';

export default function App() {
  const store = getStore();
  registerScreens(store, Provider);
  Navigation.isAppLaunched()
    .then((appLaunched) => {
      if (appLaunched) {
        startApp(); // App is launched -> show UI
      }
      new NativeEventsReceiver().appLaunched(startApp);
    });
}

function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'OnBoarding',
      navigatorStyle: {
        navBarHidden: true,
      },
    },
    appStyle: {
      orientation: 'portrait',
    },
  },
  );
}
