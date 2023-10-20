import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Novo from '../screens/Novo';
import Home from '../screens/Home';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Novo'} component={Novo} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
