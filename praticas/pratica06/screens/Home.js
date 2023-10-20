import { View, FlatList, Text, Button } from 'react-native';
import { useContext } from 'react';
import { ContatoContext } from '../contexts/ContatoContext';

const Home = ({ navigation }) => {
  const { contatos } = useContext(ContatoContext);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 24 }}>@Contatinhos</Text>
      <FlatList
        data={contatos}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 8 }}>
            <Text>{item}</Text>
          </View>
          
        )}></FlatList>
      <Button
        title={'Adicionar contato'}
        onPress={() => {
          navigation.navigate('Novo');
        }}
      />
    </View>
  );
};

export default Home;
