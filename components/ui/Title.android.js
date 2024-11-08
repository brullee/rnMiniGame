import { StyleSheet, Text, View, Platform } from "react-native";

import Colors from "../../src/constants/Colors";

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.primary500,
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderRadius: 10,
    borderColor: Colors.accent500,
    backgroundColor: Colors.accent500,
    maxWidth: "80%",
    minWidth: "60%",
    width: 300,
  },
});

// this file used to be the Title.js file, but was forked from it and changed, to test the Platform API provided by react-native
