import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ pickedNumber }) {
  let minBoundary = 1;
  let maxBoundary = 100;

  const initialGuess = generateRandomNumber(minBoundary, maxBoundary, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction){
    if ((direction === 'lower' && currentGuess < pickedNumber) || (direction === 'greater' && currentGuess > pickedNumber)){
      Alert.alert("HEY!", 'no cheating!! >:(', [{text: 'Sorry', style: "cancel"}]);
      return;
    }
    else if(direction === 'lower'){
      maxBoundary = currentGuess;

    }
    else {
      minBoundary = currentGuess + 1;
    }
    const newRandNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandNum);
  }


  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
