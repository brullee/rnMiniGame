import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton.js";

import Colors from "../src/constants/Colors.js";

function GameOverScreen({ roundNum, userNum, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundNum}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNum}</Text>.
        </Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={onStartNewGame}>Play again?</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 200 : 300,
    height: deviceWidth < 380 ? 200 : 300,
    borderRadius: deviceWidth < 380 ? 100 : 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
