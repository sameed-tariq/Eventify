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

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("registered with: ", user.email);
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView>
      <Text style={{ margin: "auto", fontWeight: "bold" }}> Signup</Text>

      <TextInput
        style={styles.TextField}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.TextField}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPass(text)}
        secureTextEntry
      />

      <TextInput
        style={styles.TextField}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

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
