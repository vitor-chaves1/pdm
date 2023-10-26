import { View } from 'react-native';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Registrar</Text>
      <Controller
        name={'nome'}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'É necessário preencher esse campo',
          },
          minLength: { value: 3, message: 'No mínimo 3 caracteres' },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label={'Nome'}
            mode={'outlined'}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <HelperText type={'error'} visible={true}>
        {errors.nome && errors.nome.message}
      </HelperText>
      <Controller
        name={'email'}
        control={control}
        rules={{
          pattern: { value: /^\S+@\S+$/i, message: 'Email invalido' },
          required: {
            value: true,
            message: 'É necessário preencher esse campo',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label={'Email'}
            mode={'outlined'}
            value={value}
            onChangeText={onChange}
            keyboardType={'email-address'}
          />
        )}
      />
      <HelperText type={'error'} visible={true}>
        {errors.email && errors.email.message}
      </HelperText>
      <Controller
        name={'senha'}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'É necessário preencher esse campo',
          },
          minLength: { value: 6, message: 'No mínimo 6 caracteres' },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label={'Senha'}
            mode={'outlined'}
            value={value}
            onChangeText={onChange}
            secureTextEntry={true}
          />
        )}
      />
      <HelperText type={'error'} visible={true}>
        {errors.senha && errors.senha.message}
      </HelperText>
      <Button mode={'contained'} onPress={handleSubmit(onSubmit)}>
        Regitrar
      </Button>
    </View>
  );
};

export default Register;
