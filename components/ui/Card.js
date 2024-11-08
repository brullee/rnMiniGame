import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../src/constants/Colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: deviceWidth > 300 ? 18 : 36,
    marginHorizontal: 24,
    padding: deviceWidth > 380 ? 12 : 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    shadowOpacity: 0.1,
  },
});
