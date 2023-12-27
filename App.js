import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/fonts/JosefinSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}