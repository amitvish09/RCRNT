/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import {
  SplaceScreen,
  WelcomeScreen,
  SigninScreen,
  SignupScreen,
  ForgetScreen,
  HomeScreen,
  PopularScreen,
  VclipScreen,
  ShowCaseScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  splace: undefined
  welcome: undefined
  signin: undefined
  signup: undefined
  forget: undefined
  bottomtab: undefined
  home: undefined
  popular: undefined
  vclip: undefined
  show: undefined
  // 🔥 Your screens go here
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splace"
    >
      {/** 🔥 Your screens go here */}
      <Stack.Screen name="splace" component={SplaceScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="signin" component={SigninScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="forget" component={ForgetScreen} />
      <Stack.Screen name="bottomtab" component={BottomTab} />
      <Stack.Screen name="show" component={ShowCaseScreen} />
    </Stack.Navigator>
  )
}

const homename = "Home"
const popularname = "Popular"
const videoClip = "Vclip"
const Tab = createBottomTabNavigator()
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={homename}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === homename) {
            iconName = focused ? "home" : "home-outline"
          } else if (rn === popularname) {
            iconName = focused ? "list" : "list-outline"
          } else if (rn === videoClip) {
            iconName = focused ? "videocam" : "videocam-outline"
            // } else if (rn === videos) {
            //   iconName = focused ? "play-circle" : "play-circle-outline"
          }
          return <Ionicons name={iconName} size={size} color={"#6bfc03"} />
        },
      })}
    >
      <Tab.Screen name={homename} component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name={popularname} component={PopularScreen} options={{ headerShown: false }} />
      <Tab.Screen name={videoClip} component={VclipScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}
interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
      {/* <BottomTab /> */}
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["splace"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
