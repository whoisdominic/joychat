import { Dimensions, Platform } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const wHeight = Dimensions.get("window").height;

const diff = height - wHeight;

export const Layout = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: wHeight,
  isSmallDevice: width < 375,
  isBigDevice: width > 1100,
  relativeY: (num: number) => (height - diff / 2) * (num / 100),
  relativeX: (num: number) => width * (num / 100),
  isIOS: Platform.OS === "ios",
};

export default Layout;
