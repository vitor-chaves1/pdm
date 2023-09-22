import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Tela Home</Text>
      <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
    </View>
  );
};

export default Home;
