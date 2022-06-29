import {
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Fx } from "../components/effects";
import SplashImages from "../constants/SplashImages";
import Layout from "../constants/Layout";
import { normalize } from "../utils";
import { Spacer } from "../components/misc/Spacer";
import Animated from "react-native-reanimated";
import { Typo } from "../components";

const MainScreen = () => {
  const defaultSpacing = 8;

  const handleScrollEvent = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    console.warn(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={styles.root}>
      <Card image={SplashImages[0]} label="计划" />
      <Card image={SplashImages[11]} label="学习" />
      <Card image={SplashImages[6]} label="享受" />
    </View>
  );
};

const Card: React.FC<{ image: string; label: string }> = ({
  children,
  image,
  label,
}) => {
  return (
    <Fx.FadeIn delay={250} time={1200}>
      <Fx.EzTouch>
        <ImageBackground
          source={{ uri: image }}
          style={styles.cardRoot}
          imageStyle={styles.cardRoot}
        >
          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              borderTopLeftRadius: normalize(16),
              backgroundColor: Colors.dark.red,
              justifyContent: "center",
              paddingHorizontal: normalize(16),
              alignItems: "center",
            }}
          >
            <Fx.FadeIn delay={1300} time={800}>
              <Typo.H3 copy={label} />
            </Fx.FadeIn>
          </View>
        </ImageBackground>
      </Fx.EzTouch>
    </Fx.FadeIn>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: normalize(45),
  },
  scroll: {},
  cardRoot: {
    width: Layout.relativeX(90),
    height: Layout.relativeY(28),
    backgroundColor: Colors.dark.card,
    borderRadius: normalize(16),
    overflow: "hidden",
  },
});
