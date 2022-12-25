import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable
} from "react-native";
import { Formik } from "formik";
import {
  useGetTokenQuery,
  useLoginMutation
} from "../../_api/authentication/authentication";
import AsyncStorage from "@react-native-community/async-storage";
import { useGetUserQuery } from "../../_api/user/user";
import axios from "axios";
import * as constants from "constants";

export default function LoginForm() {
  /*
   * Form Input States
   */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  /*
   * Device Storage
   */
  //const DeviceStorage = AsyncStorage;
  /**
   * Login Query Hook
   */
  const [login, { data, isLoading, error }] = useLoginMutation();
  const [getToken, { token }] = useGetTokenQuery();

  useEffect(async () => {
    console.log(getToken());
    setLoading(isLoading);
    if (data) {
      DeviceStorage.setItem("userToken", data.token);
      setEmail("");
      setErrorMessage("");
      setPassword("");
      setLoading(false);
    }
    if (error) console.log(error);
  }, [data, error]);


  const loginAsync = async (email, password) => {
    axios.get("sanctum/csrf-cookie")
      .then(() => {
        axios.post("api/auth/login", {
          email: email,
          password: password,
          device_name: "ios"
        }).then(response => {
          console.log(response);
          Storage.setItemAsync("userToken", response.data.token).then(
            // console.log(Storage.getItemAsync('userToken'))
          );
        })
          .catch(error => {
            console.log(error);
          });
      });
  };

  const authenticateUser = async (email, password) => {
    getToken()
      .then((response) => {
        console.log(response);
        login(email, password)
          .then(response => {
            console.log(response);
            DeviceStorage.setItem("userToken", response.data);
          }).catch(err => console.log(err));
      }).catch(err => console.log(err));
  };


  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          authenticateUser(values.email, values.password);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.inputViewContainer}>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  placeholderTextColor="#8E8E95"
                  textContentType="emailAddress"
                  value={values.email}
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#8E8E95"
                  secureTextEntry={true}
                  required={true}
                  textContentType="password"
                  value={values.password}
                />
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <Pressable style={buttonStyles.loadingBtn} onPress={handleSubmit}>
              <Text style={buttonStyles.loginText}>Login</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    height: "30%",
    width: "100%"
  },

  inputViewContainer: {
    width: "100%"
  },

  inputView: {
    backgroundColor: "#F4F4F4",
    height: 80,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 20
  },

  TextInput: {
    height: 60,
    flex: 1,
    padding: 10,
    width: "100%",
    fontFamily: "Visby-Bold",
    fontSize: 20,
    marginLeft: 30
  },

  forgot_button: {
    height: 30,
    fontFamily: "Visby-CF-Bold",
    marginBottom: 30,
    alignItems: "center",
    textAlign: "center",
    color: "#8E8E95"
  }
});

const buttonStyles = StyleSheet.create({
  loadingBtn: {
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#489b32"
  },

  loginText: {
    fontFamily: "Visby-Bold",
    color: "white",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20
  }
});