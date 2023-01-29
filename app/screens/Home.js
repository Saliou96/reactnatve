import { SafeAreaView,View,Text } from 'react-native';
import Card from './components/Card';
import Pic from './components/Pic';

const Home = (props) => {
  return (
    // <Card/>
    // <Pic/>
    <SafeAreaView>
      <View className='flex items-center'>

          <View className='bg-slate-200 w-11/12 m-5 p-5 rounded-lg'>
              <Text className=' font-bold text-lg'>Welcome to</Text>
              <Text className=' text-green-500 text-3xl'>Plant Shop</Text>
          </View>

          <View className='bg-slate-200 w-11/12 m-5 p-5 rounded-lg'>
            <Card/>
          </View>
          
      </View>
    </SafeAreaView>
  )
}

export default Home
