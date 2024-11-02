import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../src/constants/Colors";

function StartGameScreen({ onConfirm }) {
  const [enteredNum, setEnteredNum] = useState("");

  function numInputHandler(enteredVal) {
    setEnteredNum(enteredVal);
  }

  function confirmNumHandler() {
    const pickedNumber = parseInt(enteredNum);

    if (isNaN(pickedNumber) || pickedNumber <= 0 || pickedNumber >= 99) {
      Alert.alert("Invalid number!", "Input must be a number between 0 & 99.", [
        { text: "Ok", style: "destructive", onPress: resetNumHandler },
      ]);
      return;
    } else {
      onConfirm(pickedNumber);
    }
  }

  function resetNumHandler() {
    setEnteredNum("");
  }

  return (
    <View style={styles.inpuitContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numInputHandler}
        value={enteredNum}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetNumHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmNumHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inpuitContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
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
  numberInput: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
