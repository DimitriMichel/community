import { useState } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable
} from "react-native";
import { Formik } from "formik";
import { communityAPI } from "@lib/axios";
import { registrationSchema } from "@lib/ValidationSchema";

export default function RegistrationForm() {
  const [responseErrors, setResponseErrors] = useState(null);

  const registerAsync = async (email, password, passwordConfirmation) => {
    communityAPI.post("api/register", {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }).then(response => {
      console.log(response);
    })
      .catch(error => {
        console.log(error.response.data.errors);
        let errors = [];
        if (error.response.data.errors) {
          let errArr = Object.values(error.response.data.errors);
          for (let i = 0; i < errArr.length; i++) {
            errors.push(Object.values(errArr[i]).pop());
          }
          setResponseErrors(errors);
        }
      });
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", passwordConfirmation: "" }}
        validationSchema={registrationSchema}
        onSubmit={(values) => {
        registerAsync(values.email, values.password, values.passwordConfirmation);
        }}
      >
        {({
            handleChange, handleBlur, handleSubmit, values, errors,
            isValid
          }) => (
          <View style={styles.form}>
            <View style={styles.inputViewContainer}>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  placeholderTextColor="#8E8E95"
                  textContentType="emailAddress"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />

              </View>
              <View style={styles.errorView}>
                {errors.email &&
                  <Text style={{ fontSize: 14, color: "red", fontFamily: "Visby-CF-Bold" }}>{errors.email}</Text>
                }
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#8E8E95"
                  secureTextEntry={true}
                  required={true}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  textContentType="password"
                  value={values.password}
                />
              </View>
              <View style={styles.errorView}>
                {errors.password &&
                  <Text style={{ fontSize: 14, color: "red", fontFamily: "Visby-CF-Bold" }}>{errors.password}</Text>
                }
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password Confirmation"
                  placeholderTextColor="#8E8E95"
                  secureTextEntry={true}
                  required={true}
                  onChangeText={handleChange("passwordConfirmation")}
                  onBlur={handleBlur("passwordConfirmation")}
                  textContentType="password"
                  value={values.passwordConfirmation}
                />
              </View>
              <View style={styles.errorView}>
                {errors.passwordConfirmation &&
                  <Text style={{
                    fontSize: 14,
                    color: "red",
                    fontFamily: "Visby-CF-Bold"
                  }}>{errors.passwordConfirmation}</Text>
                }
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Already have an account?</Text>
            </TouchableOpacity>
            <Pressable style={buttonStyles.loadingBtn} onPress={handleSubmit}>
              <Text style={buttonStyles.loginText}>Create Account</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <View>
        {responseErrors ?
          <Text>{responseErrors[0]}</Text> : null
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%"
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

  errorView: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  responseErrorView: {
    alignItems: "center",
    justifyContent: "center",
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