import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import * as SecureStore from 'expo-secure-store';
import RegistrationForm from "./Views/Forms/RegistrationForm";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function MainView(...props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <RegistrationScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});
