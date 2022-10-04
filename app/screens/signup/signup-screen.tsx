import React, { FC, useState } from "react"
import {
  View,
  ViewStyle,
  ImageStyle,
  Dimensions,
  TextInput,
  TextStyle,
  TouchableOpacity,
} from "react-native"
import { Screen, Text, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
const { height, width } = Dimensions.get("window")
import { MaterialCommunityIcons, MaterialIcons, Feather, Ionicons } from "@expo/vector-icons"
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
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 16,
  lineHeight: 38,
  textAlign: "center",
}
const HEADERTITLECONTAINER: ViewStyle = {
  position: "absolute",
  paddingHorizontal: spacing[5],
  paddingVertical: spacing[8] * [2],
}
const HEADERTITLE: TextStyle = {
  fontSize: 38,
  color: "white",
  fontWeight: "bold",
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: "100%",
  height: height,
  position: "absolute",
}
const INPUTCONTAINER: ViewStyle = {
  borderBottomWidth: 1,
  borderColor: "white",
  flexDirection: "row",
  margin: 10,
  alignItems: "center",
}
const PASSWORDCONTAINER: ViewStyle = {
  ...INPUTCONTAINER,
  justifyContent: "space-between",
}
const EYECONTAINER: ViewStyle = { position: "absolute", right: 0 }
const LOGINBUTTON: ViewStyle = {
  width: "100%",
  height: 40,
  borderColor: "white",
  borderRadius: 10,
  backgroundColor: "#6bfc03",
  marginVertical: 10,
}
const SIGNUPBUTTON: ViewStyle = {
  width: "100%",
  height: 40,
  borderColor: "wite",
  borderRadius: 10,
  backgroundColor: "white",
  marginTop: 10,
}
const orView: ViewStyle = { flexDirection: "row", alignItems: "center" }
const orStyle: ViewStyle = {
  flex: 1,
  height: 1,
  backgroundColor: "#6bfc03",
}
const orText: TextStyle = { width: 50, textAlign: "center" }
export const SignupScreen: FC<StackScreenProps<NavigatorParamList, "signup">> = observer(
  ({ navigation }) => {
    const signin = () => navigation.navigate("signin")
    const [email_id, setEmail_Id] = useState("")
    const [password, setpassword] = useState("")
    const [isSecureEntry, setisSecureEntry] = useState(true)
    const mail = /[^\s@]+[^\s@]+\.[^\s@]+/
    return (
      <View testID="SignupScreen" style={FULL}>
        <Image source={backgroundImg} style={BOWSER} />
        <View style={HEADERTITLECONTAINER}>
          <Text style={HEADERTITLE}>Create</Text>
          <Text style={HEADERTITLE}>Account</Text>
        </View>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <View style={{ marginTop: height / 1.78 }}>
            <View style={INPUTCONTAINER}>
              <Feather name="user" size={24} color="white" />
              <TextInput
                placeholder="Username"
                placeholderTextColor="white"
                style={{ margin: 5, color: "#6bfc03", fontSize: 16 }}
              />
            </View>
            <View style={INPUTCONTAINER}>
              <MaterialCommunityIcons name="email-outline" size={24} color="white" />
              <TextInput
                placeholder="Email address"
                placeholderTextColor="white"
                style={{ margin: 5, color: "#6bfc03", fontSize: 16 }}
              />
            </View>
            <View style={PASSWORDCONTAINER}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="lock-outline" size={24} color="white" />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="white"
                  value={password}
                  secureTextEntry={isSecureEntry}
                  onChangeText={(text) => setpassword(text)}
                  style={{ margin: 5, color: "#6bfc03", fontSize: 16 }}
                />
              </View>

              <TouchableOpacity
                onPress={() => setisSecureEntry((prev) => !prev)}
                style={EYECONTAINER}
              >
                {isSecureEntry ? (
                  <Ionicons name="eye-off" size={24} color="white" />
                ) : (
                  <Ionicons name="eye" size={24} color="white" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={LOGINBUTTON}>
            <Text style={TITLE}>Sign up</Text>
          </TouchableOpacity>
          <View style={orView}>
            <View style={orStyle} />
            <View>
              <Text style={orText}>or</Text>
            </View>
            <View style={orStyle} />
          </View>
          <TouchableOpacity style={SIGNUPBUTTON} onPress={() => signin()}>
            <Text style={[TITLE, { color: "#6bfc03" }]}>Sign in</Text>
          </TouchableOpacity>
        </Screen>
      </View>
    )
  },
)
