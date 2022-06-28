import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { asyncDelay } from "../utils";
import Typo from "./Typography";

interface LetterItem {
  value: SharedValue<number>;
  letter: string;
}

export const LogoFadeIn = () => {
  const lettersToMap: LetterItem[] = [
    { letter: "喜", value: useSharedValue(0) },
    { letter: "悦", value: useSharedValue(0) },
    { letter: "聊", value: useSharedValue(0) },
  ];

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {lettersToMap.map((item, index) => (
        <FadeLetter key={item.letter} {...item} step={index} />
      ))}
    </View>
  );
};

interface FadeLetterProps extends LetterItem {
  step: number;
}

const FadeLetter: React.FC<FadeLetterProps> = ({
  value: opacity,
  step,
  letter,
}) => {
  const fade = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const fadeIn = async () => {
    await asyncDelay(300 * step);
    opacity.value = withTiming(1, {
      duration: 1250,
      easing: Easing.ease,
    });
  };

  useLayoutEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View style={fade}>
      <Typo.H1 copy={letter} />
    </Animated.View>
  );
};

export default LogoFadeIn;
