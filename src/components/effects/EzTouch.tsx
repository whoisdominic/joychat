import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";

interface EzTouchProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  onMagicTap?: (() => void) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
}

export const EzTouch: React.FC<EzTouchProps> = observer((props) => (
  <TouchableOpacity
    {...props}
    activeOpacity={0.625}
    style={[styles.reset, props.style]}
    children={props.children}
  />
));

const styles = StyleSheet.create({
  reset: {
    margin: 0,
    padding: 0,
    backgroundColor: "transparent",
  },
});

export default EzTouch;
