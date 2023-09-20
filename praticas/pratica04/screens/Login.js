import { Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useState } from 'react';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        label={'Email'}
        mode={'outlined'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label={'Senha'}
        mode={'outlined'}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Button mode={'contained'} onPress={() => {props.onLogin()}}>
        Entrar
      </Button>
    </View>
  );
};

export default Login;
