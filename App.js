import { useState, useEffect, useCallback } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./src/constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNum, setUserNum] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function pickedNumHandler(pickedNum) {
    setUserNum(pickedNum);
    setGameIsOver(false);
  }

  function gameOverHandler(numOfRounds) {
    setGuessRounds(numOfRounds);
    setGameIsOver(true);
  }

  function StartNewGameHandler() {
    setUserNum();
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onConfirm={pickedNumHandler} />;

  if (userNum) {
    screen = <GameScreen pickedNumber={userNum} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNum) {
    screen = (
      <GameOverScreen
        roundNum={guessRounds}
        userNum={userNum}
        onStartNewGame={StartNewGameHandler}
      />
    );
  }

  useEffect(() => {
    async function prepare() {
      try {
        // await Font.loadAsync(Entypo.font);

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent600]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaProvider style={styles.rootScreen}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </SafeAreaProvider>
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
