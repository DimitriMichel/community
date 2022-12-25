import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import Animated, {
  BounceInDown,
  FadeInDown,
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
  Easing
} from "react-native-reanimated";




export default function EmojiHero({ title, children, subtitle }) {
  //State
  const [imageNumberString, setImageNumberString] = useState(null);

  //Animation State
  const progress = useSharedValue(1);
  const animatedOpacity = useSharedValue(0);


  //Animation Style
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: progress.value,
      opacity: animatedOpacity.value
    };
  });

  let images = [
    require("../../assets/scene-emojis/1.png"),
    require("../../assets/scene-emojis/2.png"),
    require("../../assets/scene-emojis/3.png"),
    require("../../assets/scene-emojis/4.png"),
    require("../../assets/scene-emojis/5.png"),
    require("../../assets/scene-emojis/7.png"),
    require("../../assets/scene-emojis/8.png"),
    require("../../assets/scene-emojis/9.png"),
    require("../../assets/scene-emojis/10.png"),
    require("../../assets/scene-emojis/11.png")
  ];

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let randomImageIndex = randomIntFromInterval(1, images.length - 1);

  //Effects
  useEffect(() => {
    progress.value = withRepeat(withTiming(-10, {
      duration: 900
    }), Infinity, true);

  }, []);


  return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animated.View style={reanimatedStyle} entering={FadeIn.duration(3000)}>
            <Image
              style={styles.logo}
              source={images[randomImageIndex]}
            />
          </Animated.View>
        </View>
        <View style={styles.titlesContainer}>
          <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>{title}</Animated.Text>
          {subtitle && <Animated.Text entering={FadeInDown.delay(400).duration(500)} style={styles.subtitle}>{subtitle}</Animated.Text>}
        </View>
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: "100%",
    width: "100%"
  },
  logoContainer: {
    borderRadius: "95%",
    backgroundColor: "white",
    marginTop: 30,
    marginBottom: 10
  },
  logo: {
    height: 170,
    width: 170
  },
  titlesContainer: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "Visby-Bold",
    fontSize: 59
  },
  subtitle: {
    fontFamily: "Visby-CF-Bold",
    fontSize: 19,
    marginTop: 5,
    color: "#8E8E95",
    textAlign: "center"
  },
  image: {
    marginBottom: 40
  },
});
