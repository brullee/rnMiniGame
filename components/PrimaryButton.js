import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../src/constants/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.OuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.InnerContainer]
            : styles.InnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  OuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  InnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.accent500,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
