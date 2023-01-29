import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, Text, View, TextInput, ScrollView } from 'react-native';
import React,{useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {ChevronDownIcon,UserIcon,SearchIcon} from 'react-native-heroicons/outline'

export default function HomeScreen() {
  const navigaton = useNavigation();

  useLayoutEffect(() => {
      navigaton.setOptions({
      })
  },[])
  return (
    <SafeAreaView>
      <View className='bg-white'>
        <View className='flex-row p-3 items-center mx-4 space-x-2'>
          <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <View>
            <Text className='text-xs font-bold text-gray-400'>Deliver Now!</Text>
            <Text className='text-xs font-bold'>
              Current Location
              {/* <ChevronDownIcon size={20} color='#00CCBB'/> */}
            </Text>
          </View>
        </View>

        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4'>
          
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
            {/* <SearchIcon size={20}/> */}
            <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
            />
          </View>

        </View>  
      </View>     
{/* 
         <ScrollView>
            <Category/>
         </ScrollView> */}
    </SafeAreaView>
  );
}
