import axios from 'axios';

const BASE_URL = 'https://backend-mobile-4ad87-default-rtdb.firebaseio.com';

const listarTodos = async () => {
  try {
    const contatos = [];
    const response = await axios.get(`${BASE_URL}/contatos/data.json`);

    for (key in response.data) {
      contatos.push({ id: key, ...response.data[key] });
    }

    return contatos;
  } catch (error) {
    console.log(error);
  }
};

const incluir = async (nome, telefone) => {
  try {
    const response = await axios.post(`${BASE_URL}/contatos/data.json`, {
      nome,
      telefone,
    });
    return { id: response.data.name, nome, telefone };
  } catch (error) {
    console.log(error);
  }
};

const excluir = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/contatos/data/${id}.json`);
  } catch (error) {
    console.log(error);
  }
};

const listarPeloId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/contatos/data/${id}.json`);
    return { id, ...response.data };
  } catch (error) {
    console.log(error);
  }
};

const alterar = async (id, nome, telefone) => {
  try {
    const response = await axios.put(`${BASE_URL}/contatos/data/${id}.json`, {
      nome,
      telefone,
    });
    return { id, ...response.data };
  } catch (error) {
    console.log(error);
  }
};

export { listarTodos, incluir, excluir, listarPeloId, alterar };
