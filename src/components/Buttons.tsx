import { View, StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import { normalize } from "../utils";
import EzTouch from "./effects/EzTouch";
import Typo from "./Typography";

export const Primary: React.FC<{
  copy: string;
  color: string;
  onPress?: () => void;
}> = ({ copy, color, onPress }) => (
  <EzTouch onPress={onPress}>
    <View style={[styles.largeBtn, { backgroundColor: color }]}>
      <Typo.H3 copy={copy} />
    </View>
  </EzTouch>
);

export const Small: React.FC<{
  copy: string;
  color: string;
  onPress?: () => void;
}> = ({ copy, color, onPress }) => (
  <EzTouch onPress={onPress}>
    <View style={[styles.smallBtn, { backgroundColor: color }]}>
      <Typo.Subtile copy={copy} />
    </View>
  </EzTouch>
);

const styles = StyleSheet.create({
  largeBtn: {
    width: Layout.relativeX(90),
    height: Layout.relativeX(18),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(8),
  },
  smallBtn: {
    width: Layout.relativeX(45),
    height: Layout.relativeX(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(8),
  },
});

export const Btn = { Primary, Small };

export default Btn;
