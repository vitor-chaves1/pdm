import AuthProvider from './contexts/AuthContext';
import MainNavigation from './routes/MainNavigation';

const App = () => (
  <AuthProvider>
    <MainNavigation />
  </AuthProvider>
);

export default App;