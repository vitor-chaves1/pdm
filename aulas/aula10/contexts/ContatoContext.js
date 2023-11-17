import { createContext, useState } from 'react';
import { listarTodos, incluir } from '../services/ContatoService';

const ContatoContext = createContext();

const ContatoProvider = ({ children }) => {
  const [contatos, setContatos] = useState([]);

  const listar = async () => {
    try {
      const listaAtualizada = await listarTodos();
      setContatos(listaAtualizada);
    } catch (error) {
      console.log(error.message);
    }
  };

  const adicionar = async (nome, telefone) => {
    try {
      const contatoNovo = await incluir(nome, telefone);
      setContatos([...contatos, contatoNovo]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const buscar = (id) => {};

  const atualizar = (id, nome, telefone) => {};

  const remover = (id) => {};

  return (
    <ContatoContext.Provider
      value={{ listar, contatos, adicionar, buscar, atualizar, remover }}>
      {children}
    </ContatoContext.Provider>
  );
};

export default ContatoProvider;
export { ContatoContext };
