import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function App() {

  return(
    <View style={styles.container}>
      <Text>Aora</Text>
      <StatusBar style="auto"/>
      <Link href="/profile">Go to Profile</Link>
    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }

})