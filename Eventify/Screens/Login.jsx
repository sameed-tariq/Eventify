import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../Authentication/firebase";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const LoginUser = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Successfully Signed In!");
      })
      .catch((error) => alert(error.message));
      navigation.navigate('Home')
  };

  return (
    <KeyboardAvoidingView>
        <Text style={{ margin: "auto" , fontWeight:'bold'}}> Login Screen </Text>
    
        <TextInput
          style={styles.TextField}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>

        <TextInput
          style={styles.TextField}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPass(text)}
          secureTextEntry
        ></TextInput>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={LoginUser}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  TextField: {
    padding: 8,
    backgroundColor: "#f5f5f5",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    margin: "auto",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
