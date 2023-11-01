import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { ProdutoContext } from '../contexts/ProdutoContext';
import { useContext } from 'react';

const ProdutoDetail = ({ route, navigation }) => {
  const { produtoId } = route.params;
  const { findProduto } = useContext(ProdutoContext);
  const produto = findProduto(produtoId);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {produto.imagens.map((imagem, index) => (
            <Image
              key={index}
              style={styles.imageItem}
              source={{
                uri: imagem,
              }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    width: '33%',
    height: 100,
  },
});

export default ProdutoDetail;
