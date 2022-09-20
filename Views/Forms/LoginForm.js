import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ScalingButton } from '@components/_buttons/ScalingButton';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <View style={styles.form}>
        <View style={styles.inputViewContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#8E8E95"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#8E8E95"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <ScalingButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    height: '30%',
    width: '100%',
  },

  inputViewContainer: {
    width: '100%',
  },

  inputView: {
    backgroundColor: '#F4F4F4',
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

});
