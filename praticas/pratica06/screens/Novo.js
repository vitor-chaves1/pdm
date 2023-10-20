import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { ContatoContext } from '../contexts/ContatoContext';

const Novo = ({ navigation }) => {
  const { adicionar } = useContext(ContatoContext);
  const [nome, setNome] = useState('');
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder={'nome'}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Button
        title={'salvar'}
        onPress={() => {
          adicionar(nome)
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
export default Novo;
