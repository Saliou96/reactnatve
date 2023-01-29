import {Text, View,Image, FlatList } from 'react-native';

const data = [
    {title:'Post 1',content:'Content of post 1'},
    {title:'Post 2',content:'Content of post 2'},
    {title:'Post 3',content:'Content of post 3'},
    {title:'Post 4',content:'Content of post 4'},
    {title:'Post 5',content:'Content of post 5'},
    {title:'Post 6',content:'Content of post 6'},
    {title:'Post 7',content:'Content of post 7'},
    {title:'Post 8',content:'Content of post 8'},
    {title:'Post 9',content:'Content of post 9'},
    {title:'Post 10',content:'Content of post 10'}
]

const Card = () => {
  return (
    <FlatList
        horizontal
        data={data}
        renderItem={({item}) => 
        <View className='flex items-center'>
            <View className='bg-cyan-200 w-10/12 m-5 p-5 rounded-lg'>
                <Text className='mx-auto font-bold text-lg'>{item.title}</Text>
            </View>
        </View>
    } 
    />
  )
}
export default Card
