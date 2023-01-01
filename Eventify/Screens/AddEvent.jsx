import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { auth, db } from "../Authentication/firebase";
import { setDoc, doc, collection } from "firebase/firestore";

const AddEvent = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");

  const addEvent = () => {
    setDoc(doc(collection(db, "events")), {
      title,
      description,
      venue,
    })
      .then(() => {
        console.log("data saved");
      })
      .catch((error) => {
        console.log(error.message);
      });
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView>
      <Text style={{ margin: "auto", fontWeight: "bold" }}>Add new event</Text>

      <TextInput
        style={styles.TextField}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={styles.TextField}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <TextInput
        style={styles.TextField}
        placeholder="Venue"
        value={venue}
        onChangeText={(text) => setVenue(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addEvent}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddEvent;

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
