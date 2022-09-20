import { useCallback } from 'react';
import { RecoilRoot } from 'recoil';
import MainView from './MainView';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  /**
   * 
   * @info when the fonts are not loaded, we can continue to show SplashScreen.
   * 
   *
   */
  const [fontsLoaded] = useFonts({
    'Visby-Bold': require('./assets/fonts/VisbyRoundCF-Bold.otf'),
    'Visby-CF-Bold': require('./assets/fonts/VisbyCF-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <RecoilRoot>
      <NavigationContainer>
          <MainView />
      </NavigationContainer>
    </RecoilRoot>
  );
}
