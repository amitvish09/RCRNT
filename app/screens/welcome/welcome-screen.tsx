import React, { FC } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Screen, Text, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
const { height, width } = Dimensions.get("window")
const backgroundImg = require("../../../assets/images/Splace.jpeg")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 24,
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 30,
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 16,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 16,
  fontStyle: "italic",
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  // marginVertical: spacing[5],
  maxWidth: "100%",
  width: "100%",
  height: height,
  position: "absolute",
}

const BUTTONCONTAINER: ViewStyle = {
  width: "100%",
  height: 40,
  borderColor: "wite",
  borderRadius: 10,
  backgroundColor: "white",
}
const SIGNUPBUTTON: ViewStyle = {
  width: "100%",
  height: 40,
  borderColor: "white",
  borderRadius: 10,
  backgroundColor: "#6bfc03",
  marginTop: 10,
}

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const signin = () => navigation.navigate("signin")
    const signup = () => navigation.navigate("signup")

    return (
      <View testID="WelcomeScreen" style={FULL}>
        {/* <GradientBackground colors={["#422443", "#281b34"]} /> */}
        <Image source={backgroundImg} style={BOWSER} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Text style={HEADER_TITLE}>RC2RNT</Text>
          <View style={{ marginTop: height / 1.55 }}>
            <Text style={TITLE_WRAPPER}>Food delivery</Text>
            <Text style={ALMOST}>We make food for you at anytime.</Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity style={BUTTONCONTAINER} onPress={() => signin()}>
              <Text style={[TITLE, { color: "#6bfc03" }]}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SIGNUPBUTTON} onPress={() => signup()}>
              <Text style={TITLE}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </Screen>
      </View>
    )
  },
)
