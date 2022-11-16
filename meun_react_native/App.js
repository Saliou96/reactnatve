import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {

  const Click = () => console.log('Text clicked')
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={Click}
        >Hello word!</Text>
      <StatusBar style="auto" />
      <Image source={{width:200,height:300,uri:"https://pixabay.com/fr/photos/arbre-le-coucher-du-soleil-736885/"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
