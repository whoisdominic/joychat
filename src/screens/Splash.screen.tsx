import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Fx } from "../components/effects";
import { LetterFadeIn } from "../components/LetterFadeIn";
import { asyncDelay, normalize } from "../utils";
import { ImageBackgroundCarousel } from "../components/ImageBackgroundCarousel";
import SplashImages from "../constants/SplashImages";
import Btn from "../components/Buttons";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamsList } from "../navigation/MainStack";
import Colors from "../constants/Colors";

type Props = NativeStackScreenProps<MainStackParamsList, "Splash">;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const [readyForNextScreen, setreadyForNextScreen] = useState(false);

  const handleEnter = async () => {
    setreadyForNextScreen(true);
    await asyncDelay(1250);
    navigation.navigate("Main");
  };

  return (
    <ImageBackgroundCarousel images={SplashImages}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.root}>
          <LetterFadeIn copy="轻松出行" />
          <Fx.FadeIn visible={!readyForNextScreen}>
            <Fx.FadeIn delay={2750} time={500}>
              <Btn.Primary
                copy="进入"
                color={Colors.dark.red}
                onPress={handleEnter}
              />
            </Fx.FadeIn>
          </Fx.FadeIn>
        </View>
      </SafeAreaView>
    </ImageBackgroundCarousel>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: normalize(32),
  },
});
