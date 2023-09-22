import { NavigationContainer } from '@react-navigation/native';

import NavegacaoPilha from './routes/NavegacaoPilha'
import NavegacaoGaveta from './routes/NavegacaoGaveta'
import NavegacaoAba from './routes/NavegacaoAba'

const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoPilha />
    </NavigationContainer>
  );
};

export default App;