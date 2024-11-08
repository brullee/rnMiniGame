import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ pickedNumber, onGameOver }) {
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);

  const initialGuess = generateRandomNumber(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  const guessRoundListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, pickedNumber, onGameOver]);

  useEffect(() => {
    setMinBoundary(1);
    setMaxBoundary(100);
  }, []);

  function nextGuessHandler(direction) {
    let updatedMinValue = minBoundary;
    let updatedMaxValue = maxBoundary;

    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "greater" && currentGuess > pickedNumber)
    ) {
      Alert.alert("HEY!", "no cheating!! >:(", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    } else if (direction === "lower") {
      updatedMaxValue = currentGuess;
      setMaxBoundary(updatedMaxValue);
    } else {
      updatedMinValue = currentGuess + 1;
      setMinBoundary(updatedMinValue);
    }
    const newRandNum = generateRandomNumber(
      updatedMinValue,
      updatedMaxValue,
      currentGuess
    );
    setCurrentGuess(newRandNum);
    setGuessRounds((prevGuessRounds) => [newRandNum, ...prevGuessRounds]);
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="arrow-down" size={24} />
          </PrimaryButton>

          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="arrow-up" size={24} />
          </PrimaryButton>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View>
          <Card>
            <View style={styles.buttonsContainerWide}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="arrow-down" size={24} />
              </PrimaryButton>

              <NumberContainer>{currentGuess}</NumberContainer>

              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons name="arrow-up" size={24} />
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Phone's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNum={guessRoundListLength - itemData.index}
                guess={itemData.item}
              />
            );
          }}
          keyExtractor={(item) => item}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
});
