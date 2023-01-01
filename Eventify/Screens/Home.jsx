import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { auth, db } from "../Authentication/firebase";
import { getDocs, collection } from "firebase/firestore";

const Home = ({ navigation }) => {
  const currentUser = auth.currentUser;
  const [events, setEvents] = useState([]);

  const getData = () => {
    console.log(currentUser ? currentUser : "No user");
    getDocs(collection(db, "events")).then((docSnap) => {
      let tempEvents = [];
      docSnap.forEach((doc) => {
        tempEvents.push({ ...doc.data(), id: doc.id });
      });
      setEvents(tempEvents);
      console.log(tempEvents);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text style={styles.container}> Welcome to Eventify! </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("AddEvent");
          }}
        >
          <Text style={styles.buttonText}>Add new event</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={events}
        renderItem={({ item }) => (
          <TouchableOpacity
          // onPress={() => navigation.navigate("Product", { item })}
          >
            <View
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
              }}
            >
              <View
                style={{
                  height: 150,
                  width: 160,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  backgroundColor: "#59b2ab",
                }}
              >
                <Image
                  source={require("../assets/event.jpg")}
                  style={{
                    height: 150,
                    width: 160,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "#585a61" }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 13, color: "#b1e5d3" }}>
                  {item.description}
                </Text>
                <Text style={{ fontSize: 13, color: "#b1e5d3" }}>
                  {item.venue}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
