import React, { useLayoutEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { asyncDelay } from "../../utils";

interface FadeInProps {
  time?: number;
  delay?: number;
  visible?: boolean;
}

/**
 *
 * @param FadeInProps
 * @returns React.FC
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  time,
  delay,
  visible: isVisible,
}) => {
  if (isVisible && delay) {
    console.warn("FadeIn: Can not use delay & visible prop together");
  }

  const opacity = useSharedValue(0);

  const fade = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const fadeIn = async () => {
    await asyncDelay(delay);
    opacity.value = withTiming(1, {
      duration: time ?? 333.33,
      easing: Easing.ease,
    });
  };

  const fadeOut = async () => {
    opacity.value = withTiming(0, {
      duration: time ?? 333.33,
      easing: Easing.ease,
    });
  };

  useLayoutEffect(() => {
    if (isVisible === true) {
      fadeIn();
    } else if (isVisible === false) {
      fadeOut();
    } else {
      fadeIn();
    }

    return () => {
      fadeOut();
    };
  }, [isVisible]);

  return <Animated.View children={children} style={fade} />;
};

export default FadeIn;
