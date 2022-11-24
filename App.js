import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemProvider } from './src/contexts/GameContext';
import AddEnd from './src/screens/AddEnd';
import EditEnd from './src/screens/EditEnd';
import EditGame from './src/screens/EditGame';
import IndexScreen from './src/screens/IndexScreen';
import NewGame from './src/screens/NewGame';
import ScoreCard from './src/screens/ScoreCard';
import ViewGames from './src/screens/ViewGames';
import styles from './styles';

const Stack = createNativeStackNavigator(); 


const App = () => {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen name="Index" component={IndexScreen} options={ {title: "Kingston Bowls Club"} }/>
          <Stack.Screen name="NewGame" component={NewGame} options={ {title: "New Game"} }/>
          <Stack.Screen name="ViewGames" component={ViewGames} options={ {title: "Games"} }/>
          <Stack.Screen name="ScoreCard" component={ScoreCard} options={ {title: "Score Card"} }/>
          <Stack.Screen name="AddEnd" component={AddEnd} options={ {title: "Next End"} }/>
          <Stack.Screen name="EditEnd" component={EditEnd} options={ {title: "Update End"} }/>
          <Stack.Screen name="EditGame" component={EditGame} options={ {title: "Edit Game"} }/>
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}

export default App; 


