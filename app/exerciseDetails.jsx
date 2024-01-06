//Native.
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
//React.
import React from 'react'
//Hooks.
import { useLocalSearchParams, useRouter } from 'expo-router';
//Expo Img
import { Image } from 'expo-image';
//RN Responsive Screen.
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//Icons.
import Anticons from 'react-native-vector-icons/AntDesign';
//Reanimated.
import Animated, { FadeInDown } from 'react-native-reanimated';


export default function exerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-white rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit='cover'
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-4 absolute rounded-full mt-8 right-0"
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details */}

      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-black tracking-wide uppercase"
        >
          {item.name.toUpperCase}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-black tracking-wide"
        >
          Equipment <Text className="font-bold text-rose-500 uppercase">
            {item?.equipment}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-black tracking-wide"
        >
          Secondary Muscles <Text className="font-bold text-rose-500 uppercase">
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-black uppercase tracking-wide"
        >
          Target <Text className="font-bold text-rose-500 uppercase">
            {item?.target}
          </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3) }}
          className="font-semibold text-rose-500 tracking-wide"
        >
          Instructions
        </Animated.Text>

        {
          item.instructions?.split(',').map((instruction, index) => {
            return (
              <Animated.Text
                entering={FadeInDown.delay((index + 5) * 100).duration(300).springify()}
                key={instruction}
                style={{ fontSize: hp(1.7) }}
                className="text-black uppercase"
              >
                {instruction}
              </Animated.Text>
            )
          })
        }
      </ScrollView>

    </View>
  )
}