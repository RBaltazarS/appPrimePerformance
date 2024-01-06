//React Native.
import { View, Text } from 'react-native'
//React.
import React from 'react'
//Expo Img
import { Image } from 'expo-image';
//Snap Carousel. 
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
//Constants.
import { sliderImages } from '../constants';
//RN Responsive Screen.
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />

  )
}

const ItemCard = ({ item }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(30) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: 'contain' }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  )
}