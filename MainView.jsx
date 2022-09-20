import { StatusBar } from 'expo-status-bar';
import { userAtom } from './_state/users';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'; 
import LoginScreen from '@/Screens/LoginScreen';
import * as SecureStore from 'expo-secure-store';

export default function MainView(...props) {
  const [isLoading, setLoading] = useState(true);
  const user = useRecoilValue(userAtom);
  const setUser = useSetRecoilState(userAtom);
  
  const Storage = SecureStore;

  useEffect(() => {
    //Check if user is authenticated
    

    //Check SecureStore for the user object's token
    Storage.getItemAsync('user')
    .then((userString) => {
      if(userString){
        setUser(userString);
      }
      setLoading(false);
    }).catch(err => {
      console.log(err)
      setLoading(false);
    })
  },[]);

  return (
    <View style={styles.container}>
    { user  !== null ? (<Text>Authenticated</Text>) : (<LoginScreen/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
