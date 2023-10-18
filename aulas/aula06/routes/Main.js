import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const Main = () => {
  const { usuario } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {!usuario.logado ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
    </Stack.Navigator>
  );
};

export default Main;
