import { View } from 'react-native';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Login</Text>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: 'Email obrigatorio' },
          pattern: {
            value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
            message: 'Email no formato invalido',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            keyboardType="email-address"
            label="E-mail"
            mode="outlined"
            value={value}
            onChangeText={onChange}
          />
        )}
        name="email"
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email ? errors.email.message : ''}
      </HelperText>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: 'Senha obrigatoria' },
          minLength: {
            value: 6,
            message: 'A senha deve conter no minimo 6 caracteres',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            secureTextEntry={true}
            label="Senha"
            mode="outlined"
            value={value}
            onChangeText={onChange}
          />
        )}
        name="senha"
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha ? errors.senha.message : ''}
      </HelperText>
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Entrar
      </Button>
    </View>
  );
};

export default Login;
