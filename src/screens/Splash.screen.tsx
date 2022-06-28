import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Fx } from "../components/effects";
import { LetterFadeIn } from "../components/LetterFadeIn";
import { normalize } from "../utils";
import { ImageBackgroundCarousel } from "../components/ImageBackgroundCarousel";
import BottomSheet from "../components/BottomSheet";
import SplashImages from "../constants/SplashImages";

const SplashScreen = () => {
  const [drawer, setDrawer] = useState(false);

  const handleBackdropPress = () => {
    setDrawer(false);
  };

  return (
    <ImageBackgroundCarousel images={SplashImages}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <View style={styles.root}>
            <Fx.EzTouch onPress={() => setDrawer(true)}>
              <LetterFadeIn copy="轻松出行" />
            </Fx.EzTouch>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      <BottomSheet show={drawer} setShow={setDrawer} />
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
