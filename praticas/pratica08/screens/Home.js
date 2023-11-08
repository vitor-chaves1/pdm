import { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { List, Appbar, IconButton, FAB } from 'react-native-paper';
import { ContatoContext } from '../contexts/ContatoContext';

const Home = ({ navigation }) => {
  const { contatos, remover } = useContext(ContatoContext);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title={'@Contatos'} />
      </Appbar.Header>
      <ScrollView style={{ flex: 1 }}>
        {contatos.map((contato) => (
          <List.Item
            key={contato.id}
            title={contato.nome}
            description={contato.telefone}
            right={(props) => (
              <IconButton
                icon={'delete'}
                onPress={() => {
                  remover(contato.id);
                }}
                {...props}
              />
            )}
            onPress={() =>
              navigation.navigate('Editar', { contatoId: contato.id })
            }
          />
        ))}
      </ScrollView>
      <FAB
        icon={'plus'}
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        onPress={() => navigation.navigate('Novo')}
      />
    </View>
  );
};

export default Home;
