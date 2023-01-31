import { Button, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center top-0">

        <View className='flex-row justify-around mb-2'>
            <TextInput 
            className='px-2 border border-gray-200 w-1/2 0 mr-8'
            placeholder='Write task'/>
            <Button title="Add task"/>
        </View>
        <View>
            <Text>Tasks List</Text>
        </View>
    </View>
  );
}
