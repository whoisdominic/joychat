import { ExpoConfig } from "@expo/config-types";

const config: ExpoConfig = {
  name: "travel-ch",
  slug: "travel-ch",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "travel-ch",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  ios: {
    buildNumber: "2",
    bundleIdentifier: "com.tokul.travel-ch",
    supportsTablet: false,
  },
};

export default config;
