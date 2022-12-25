import { useCallback } from "react";
import MainView from "./MainView";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./_redux/store";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { useGetUserQuery } from "./_api/user/user";

import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Test from "./Views/Test";
import RegistrationForm from "./Views/Forms/RegistrationForm";


export default function App() {
  /**
   *
   * @info when the fonts are not loaded, we can continue to show SplashScreen.
   *
   *
   */
  const [fontsLoaded] = useFonts({
    "Visby-Bold": require("./assets/fonts/VisbyRoundCF-Bold.otf"),
    "Visby-CF-Bold": require("./assets/fonts/VisbyCF-Bold.ttf")
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
    <Provider store={store}>
       <MainView/>
    </Provider>
  );
}

