import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder={'email'} keyboardType={'email-address'} />
        <TextInput style={styles.input} placeholder={'senha'} secureTextEntry={true} />
        <Button title={'entrar'}/>
      </View>
    </>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title:{
    fontSize:24,
    fontWeight:'bold'
  },
  input:{
    width:'100%',
    height:48,
    borderColor:'gray',
    borderWidth:1,
    marginBottom:16,
    paddingLeft:8
  }
})
export default Login