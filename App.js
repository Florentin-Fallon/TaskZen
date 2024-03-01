import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './components/Accueil';
import Ville from './components/Ville';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Ville" component={Ville} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;