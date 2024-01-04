//React Native.
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
//React.
import React from 'react'
//Expo.
import { StatusBar } from 'expo-status-bar'
//RN Responsive Screen.
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//Icons.
import Ionicons from 'react-native-vector-icons/Ionicons';
//Component.
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';


export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />

      {/* Avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* Img Slider */}
      <View>
        <ImageSlider />
      </View>

      {/* Body Parts List */}
      <View className="flex-1">
        <BodyParts />
      </View>

    </SafeAreaView>
  )
}