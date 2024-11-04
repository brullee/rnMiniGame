import { StyleSheet, Text, View } from "react-native";

import Colors from "../../src/constants/Colors";

function Title({ children }) {
  return (
    <View style={styles.titleFrame}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: Colors.primary500,
    textAlign: "center",
    padding: 12,
  },
  titleFrame: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.accent500,
    backgroundColor: Colors.accent500,
  },
});
