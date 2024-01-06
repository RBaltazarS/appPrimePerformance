//React Native.
import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native';
//Hooks.
import React, { useEffect, useState } from 'react'
//Expo Router.
import { useLocalSearchParams, useRouter } from 'expo-router'
//API = ExerciseDB.
import { fetchExercisesByBodypart } from '../api/exerciseDB';
//Constants.
import { demoExercises } from '../constants';
//Status Bar.
import { StatusBar } from 'expo-status-bar';
//RN Responsive Screen.
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//Icons.
import Ionicons from 'react-native-vector-icons/Ionicons';
//Component.
import ExerciseList from '../components/ExerciseList';
//Virtualizad.
import { ScrollView } from 'react-native-virtualized-view'


export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);
  const item = useLocalSearchParams();
  // console.log('got item: ', item);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);
    // console.log('got data: ', data);
    setExercises(data);
  }
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* Exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text style={{ fontSize: hp(3) }} className="font-semibold text-black">
          {item.name.toUpperCase()} Exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  )
}