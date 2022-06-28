import React, { useEffect, useLayoutEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LogoFadeIn from "../components/LogoFadeIn";

const SplashScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      }}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.root}>
        <LogoFadeIn />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
  },
  h1: {
    fontFamily: "zhi mang xing",
    fontSize: 48,
    color: "#FFF",
  },
});
