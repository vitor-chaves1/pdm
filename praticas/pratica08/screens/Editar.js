import { useContext } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, HelperText, Button } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { ContatoContext } from '../contexts/ContatoContext';

const Editar = ({ route, navigation }) => {
  const { contatoId } = route.params;
  const { buscar, atualizar } = useContext(ContatoContext);

  //buscar(contatoId)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { nome: contato.nome, telefone: contato.telefone },
  });
  return <></>;
};

export default Editar;
