import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action
          icon="logout"
          onPress={() => {props.onLogout()}}
        />
      </Appbar.Header>
    </View>
  );
};

export default Home