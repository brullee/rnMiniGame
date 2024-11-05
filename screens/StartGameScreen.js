import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
    <View style={styles.rootContainer}>
      <Title>Guessing game!</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
          <PrimaryButton onPress={resetNumHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmNumHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
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
});
