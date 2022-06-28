import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import MainStack from "./src/navigation/MainStack";
import SplashScreen from "./src/screens/Splash.screen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style="light" />
        <MainStack />
      </SafeAreaProvider>
    );
  }
}
