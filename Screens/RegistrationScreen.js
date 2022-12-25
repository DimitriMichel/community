import React from "react";
import EmojiHero from "../_components/heroes/EmojiHero";
import RegistrationForm from "../Views/Forms/RegistrationForm";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

export default function RegistrationScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <EmojiHero title='Sign up!' children={<RegistrationForm/>}/>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%"
  }
})