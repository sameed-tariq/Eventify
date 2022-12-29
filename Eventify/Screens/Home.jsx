import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Home = () => {

    return (
      <View>
        <Text style={styles.container} > Welcome to Eventify! </Text>
      </View>
    )
  }


export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
