import { useContext } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, HelperText, Button } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { ContatoContext } from '../contexts/ContatoContext';

const Editar = ({ route, navigation }) => {
  const { contatoId } = route.params;
  const { buscar, atualizar } = useContext(ContatoContext);

  const contato = buscar(contatoId);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { nome: contato.nome, telefone: contato.telefone },
  });

  const onSubmit = (data) => {
    const { nome, telefone } = data;
    atualizar(contatoId, nome, telefone);
    navigation.pop();
  };
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title={'Editar Contato'} />
      </Appbar.Header>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Controller
          name="nome"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'É necessário preencher esse campo',
            },
            minLength: { value: 3, message: 'No minimo 3 caracteres' },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Nome"
              mode={'outlined'}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.nome && errors.nome.message}
        </HelperText>
        <Controller
          name="telefone"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'É necessário preencher esse campo',
            },
            pattern: {
              value:
                /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
              message: 'Telefone Invalido',
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Telefone"
              mode={'outlined'}
              onChangeText={onChange}
              keyboardType={'phone-pad'}
              value={value}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.telefone && errors.telefone.message}
        </HelperText>

        <Button mode={'contained'} onPress={handleSubmit(onSubmit)}>
          Salvar
        </Button>
      </ScrollView>
    </View>
  );
};

export default Editar;
