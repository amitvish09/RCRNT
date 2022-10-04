import React, { FC, useState } from "react"
import {
  View,
  ViewStyle,
  ImageStyle,
  Dimensions,
  TextInput,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { Screen, Text, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
const { height, width } = Dimensions.get("window")
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from "@expo/vector-icons"
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
const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: "100%",
  height: height,
  position: "absolute",
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
const EYECONTAINER: ViewStyle = {
  // alignSelf: "center",
  position: "absolute",
  right: 0,
}
const INPUTCONTAINER: ViewStyle = {
  borderBottomWidth: 1,
  borderColor: "white",
  flexDirection: "row",
  margin: 10,
  alignItems: "center",
}

const SIGNUPBUTTON: ViewStyle = {
  width: "100%",
  height: 40,
  borderColor: "wite",
  borderRadius: 10,
  backgroundColor: "white",
  marginTop: 10,
}

export const ForgetScreen: FC<StackScreenProps<NavigatorParamList, "forget">> = observer(
  ({ navigation }) => {
    const signup = () => navigation.navigate("signup")
    const [email_id, setEmail_Id] = useState("")
    const mail = /[^\s@]+[^\s@]+\.[^\s@]+/

    // USER VALIDATION----------------------------------

    const validation = () => {
      if (email_id.length === 0 || mail.test(email_id) === false) {
        console.log("Please enter valid email")
      } else {
        console.log("Done")
        navigation.navigate("signin")
      }
    }
    return (
      <View testID="ForgetScreen" style={FULL}>
        <Image source={backgroundImg} style={BOWSER} />
        <View style={HEADERTITLECONTAINER}>
          <Text style={HEADERTITLE}>Forget</Text>
          <Text style={HEADERTITLE}>Password</Text>
        </View>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <View style={{ marginTop: height / 1.35 }}>
            <View style={INPUTCONTAINER}>
              <MaterialCommunityIcons name="email-outline" size={24} color="white" />
              <TextInput
                value={email_id}
                placeholder="Email address"
                placeholderTextColor="white"
                onChangeText={(text) => setEmail_Id(text)}
                style={{ margin: 5, color: "white", fontSize: 16, flex: 1 }}
              />
            </View>
            <TouchableOpacity style={SIGNUPBUTTON} onPress={() => validation()}>
              <Text style={[TITLE, { color: "#6bfc03" }]}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Screen>
      </View>
    )
  },
)
