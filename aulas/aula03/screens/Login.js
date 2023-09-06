import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../assets/snack-icon.png')}style={styles.logo} />
        <Text style={styles.titulo}>Login</Text>
        <TextInput style={styles.input} placeholder={'Email'} keyboardType={'email-address'} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        <Button title={'Entrar'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    height: 72,
    width: 72,
    alignSelf: 'center'
  },
  titulo:{
    fontSize: 24,
    fontWeight: 400,
    textAlign: 'center',
    paddingBottom: 24
  },
  input:{
    lineHeight: 24,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 16,
    marginBottom:16
  }
});

export default Login;
