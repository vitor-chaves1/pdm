import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './routes/MainNavigator'

const App = () => {
  return <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>;
};

export default App;
