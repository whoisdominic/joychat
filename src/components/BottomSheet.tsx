import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { normalize } from "../utils";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  GestureEvent,
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

export const BottomSheet: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ show, setShow }) => {
  /**
   * Drawer Animation logic
   */
  const snapPoint = [30, 200];

  const drawerHeight = useSharedValue(0);

  const defaultHeight = 400;

  const drawerStyle = useAnimatedStyle(() => {
    return {
      height: drawerHeight.value,
    };
  });

  const openDrawer = () => {
    drawerHeight.value = withTiming(defaultHeight, {
      duration: 500,
      easing: Easing.bezier(0, 0.25, 0.75, 1),
    });
    setShow(true);
  };

  const closeDrawer = () => {
    drawerHeight.value = withTiming(0, {
      duration: 500,
      easing: Easing.bezier(0, 0.65, 0.85, 1),
    });
    setShow(false);
  };

  const handlePanGesture = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ) => {
    if (event.nativeEvent.translationY > snapPoint[1]) {
      closeDrawer();
      return;
    }

    if (event.nativeEvent.translationY > 0) {
      drawerHeight.value = defaultHeight - event.nativeEvent.translationY;
    }
  };

  const handlePanEnd = (
    event: HandlerStateChangeEvent<Record<string, unknown>>
  ) => {
    if (show) {
      openDrawer();
    }
  };

  useEffect(() => {
    if (show) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [show]);

  return (
    <PanGestureHandler onGestureEvent={handlePanGesture} onEnded={handlePanEnd}>
      <Animated.View
        style={[
          {
            zIndex: 999,
            bottom: 0,
            position: "absolute",
            backgroundColor: "#1b1c1e",
            width: "100%",
            borderTopLeftRadius: normalize(12),
            borderTopRightRadius: normalize(12),
          },
          drawerStyle,
        ]}
      />
    </PanGestureHandler>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
