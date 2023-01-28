import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-cyan-600 justify-center items-center align-center">
      <Text className='text-green-500'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
