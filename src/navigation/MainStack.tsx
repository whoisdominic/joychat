import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/Main.screen";
import NotFoundScreen from "../screens/NotFound.screen";
import SplashScreen from "../screens/Splash.screen";

export type MainStackParamsList = {
  Splash: undefined;
  Main: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamsList>();

export function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;
