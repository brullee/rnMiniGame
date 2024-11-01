import { Pressable, View, Text, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("heheh");
  }
  return (
    <View style={styles.OuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.InnerContainer]
            : styles.InnerContainer
        }
        onPress={pressHandler}
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
    backgroundColor: "#DBAFA0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#49243E",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
