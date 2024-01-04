//React Native.
import { View, Text, Image, TouchableOpacity } from 'react-native'
//React
import React from 'react'
//RN Responsive Screen.
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//Status Bar.
import { StatusBar } from "expo-status-bar"
//Linear Gradient.
import { LinearGradient } from "expo-linear-gradient"
//RN Reanimated.
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated"
//Expo Router.
import { useRouter } from "expo-router"


export default function Index() {

  const router = useRouter()

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />

      <LinearGradient
        colors={["transparent", "#18181B"]}
        style={{ width: wp(100), heigh: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
            Best <Text className="text-rose-500">Wroktouts</Text>
          </Text>
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
            For You
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text style={{ fontSize: hp(3) }} className="text-white font-bold tracking-wide">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  )
}