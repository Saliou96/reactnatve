import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import Home from './screens/HomeScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown : false
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 