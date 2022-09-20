import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Animated, {
  BounceInDown,
  FadeInDown,
  FadeIn,
  useAnimatedStyle,
  useSharedValue, withRepeat,
  withSpring, withTiming,
    Easing
} from 'react-native-reanimated';


import LoginForm from '../Views/Forms/LoginForm';

export default function LoginScreen() {
  //State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageNumberString, setImageNumberString] = useState(null)

  //Animation State
  const progress = useSharedValue(1);
  const animatedOpacity = useSharedValue(0);


  //Animation Style
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: progress.value,
      opacity: animatedOpacity.value
    }
  })

  let images = [
      require("../assets/scene-emojis/1.png"),
      require("../assets/scene-emojis/2.png"),
      require("../assets/scene-emojis/3.png"),
      require("../assets/scene-emojis/4.png"),
      require("../assets/scene-emojis/5.png"),
      require("../assets/scene-emojis/7.png"),
      require("../assets/scene-emojis/8.png"),
      require("../assets/scene-emojis/9.png"),
      require("../assets/scene-emojis/10.png"),
      require("../assets/scene-emojis/11.png"),
  ]

  const randomIntFromInterval= (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let randomImageIndex = randomIntFromInterval(1,images.length -1)

  //Effects
  useEffect(() => {
    progress.value = withRepeat(withTiming(-10,{
      duration: 900,
    } ), Infinity, true)

  }, [])


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animated.View style={reanimatedStyle} entering={FadeIn.duration(3000)} >
            <Image
                style={styles.logo}
                source={images[randomImageIndex]}
            />
          </Animated.View>
        </View>
        <View>
          <Animated.Text  entering={FadeInDown.duration(500)}  style={styles.title}>Community!</Animated.Text>
          <Animated.Text entering={FadeInDown.delay(400).duration(500)}   style={styles.subtitle}>we've been waiting for you!</Animated.Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },

  logoContainer: {
    borderRadius: '95%',
    backgroundColor: 'white',
    marginBottom: 10,
  },

  logo: {
    height: 170,
    width: 170,
  },

  title: {
    fontFamily: 'Visby-Bold',
    fontSize: 59,
  },

  subtitle: {
    fontFamily: 'Visby-CF-Bold',
    fontSize: 19,
    marginTop: 5,
    marginBottom: 50,
    color: '#8E8E95',
    textAlign: 'center',
  },

  inputViewContainer: {
    justifyContent: 'center',
    fontFamily: 'Visby-Bold',
    width: '80%',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#F4F4F4',
    fontFamily: 'Visby-Bold',
    height: 80,
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },

  TextInput: {
    height: 60,
    flex: 1,
    padding: 10,
    width: '100%',
    fontFamily: 'Visby-Bold',
    fontSize: 20,
    marginLeft: 30,
  },

  forgot_button: {
    height: 30,
    fontFamily: 'Visby-CF-Bold',
    marginBottom: 30,
    alignItems: 'center',
    textAlign: 'center',
    color: '#8E8E95',
  },

  formContainer: {
    width: '80%',
  },

  loginBtn: {
    width: '30%',
    borderRadius: 25,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Visby-Bold',
    backgroundColor: '#489b32',
  },

  loginText: {
    fontFamily: 'Visby-Bold',
    color: 'white',
    fontSize: 22,
  },
});
