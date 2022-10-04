import React, { FC, useEffect } from "react"
import { View, ViewStyle, ImageStyle, Dimensions } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { AutoImage as Image } from "../../components"
import { NavigatorParamList } from "../../navigators"
const { height, width } = Dimensions.get("window")
const backgroundImg = require("../../../assets/images/Splace.jpeg")

const FULL: ViewStyle = { flex: 1 }
const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: width,
  height: "100%",
  position: "absolute",
}

export const SplaceScreen: FC<StackScreenProps<NavigatorParamList, "splace">> = observer(
  ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        nextScreen()
      }, 2000)
    }, [])

    const nextScreen = () => navigation.navigate("welcome")

    return (
      <View testID="SplaceScreen" style={FULL}>
        <Image source={backgroundImg} style={BOWSER} />
      </View>
    )
  },
)
