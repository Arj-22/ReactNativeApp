import { StatusBar } from 'expo-status-bar';
import { Text, View, Button} from 'react-native';
import styles from '../../styles';

const IndexScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainerSingle}>
        <Button title='New Game' onPress={() => navigation.navigate("NewGame")}/>
      </View>
      <View style={styles.buttonContainerSingle}>
        <Button title='View Games' onPress={() => navigation.navigate("ViewGames")}/>
      </View>
    <StatusBar style="auto" />
  </View>
  );
}

export default IndexScreen; 
