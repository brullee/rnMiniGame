import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./src/constants/Colors";

export default function App() {
  const [userNum, setUserNum] = useState();

  function pickedNumHandler(pickedNum) {
    setUserNum(pickedNum);
  }

  let screen = <StartGameScreen onConfirm={pickedNumHandler} />;

  if (userNum) {
    screen = <GameScreen pickedNumber={userNum} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent600]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
