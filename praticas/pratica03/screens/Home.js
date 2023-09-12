import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>Home</Text>
        </View>
        <FlatList
          data={['item1', 'item2', 'item3', 'item4', 'item5']}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>
          )}
        />
        <Button title={'Adicionar'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '%cccccc',
  },
});
export default Home;
