import { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { ContatoContext } from '../contexts/ContatoContext';

const Novo = ({ navigation }) => {
  const { adicionar } = useContext(ContatoContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { nome, telefone } = data;
    adicionar(nome, telefone);
    navigation.pop();
  };
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Novo Contato" />
      </Appbar.Header>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Controller
          name={'nome'}
          control={control}
          rules={{
            required: { value: true, message: 'Nome é obrigatório' },
            minLength: { value: 3, message: 'No minimo 3 caracteres' },
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
          name={'telefone'}
          control={control}
          rules={{
            required: { value: true, message: 'Telefone é obrigatório' },
            pattern: {
              value:
                /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
              message: 'Telefone invalido',
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              label={'Telefone'}
              mode={'outlined'}
              value={value}
              onChangeText={onChange}
              keyboardType={'phone-pad'}
            />
          )}
        />
        <HelperText type={'error'} visible={true}>
          {errors.telefone && errors.telefone.message}
        </HelperText>
        <Button mode={'contained'} onPress={handleSubmit(onSubmit)}>
          Salvar
        </Button>
      </ScrollView>
    </View>
  );
};

export default Novo;
