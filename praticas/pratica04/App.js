import Login from './screens/Login';
import Home from './screens/Home';
import { useState } from 'react';

const App = () => {
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  return logado ? (
    <Home onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
