import React, { FC, useEffect, useState } from "react"
import {
  View,
  ViewStyle,
  ImageStyle,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextStyle,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import Ionicons from "@expo/vector-icons/Ionicons"
import DishList from "./dishlist"
import apiHandler from "../../services/api/apiHandler"
const { width, height } = Dimensions.get("window")


const FULL: ViewStyle = { flex: 1, backgroundColor: "white" }
const HEADERVIEW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: 20,
  marginTop: 15,
  marginBottom: 10,
  alignItems: "center",
}
export const PopularScreen: FC<StackScreenProps<NavigatorParamList, "popular">> = observer(
  ({ navigation }) => {
    const Prev = () => navigation.goBack()
    const [searchApi, results, errorMessage] = apiHandler()

    const filterResultsByPrice = (price) => {
      //price === "$"||"$$||"$$$"
      return results.filter((results) => {
        return results.price === price
      })
    }
    const filterResultsByRating = (rating) => {
      //price === "$"||"$$||"$$$"
      return results.filter((results) => {
        return results.rating === rating
      })
    }
    return (
      <View testID="PopularScreen" style={FULL}>
        <View style={HEADERVIEW}>
          <TouchableOpacity onPress={Prev}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Popular</Text>
          <TouchableOpacity>
            <Ionicons name="md-search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{  }}>
          <DishList items={filterResultsByRating(4.5)} />
        </View>
      </View>
    )
  },
)
