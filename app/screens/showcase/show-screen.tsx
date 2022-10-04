import React, { FC, useEffect, useState } from "react"
import {
  View,
  ViewStyle,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  Alert,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { Screen } from "../../components/screen/screen"
import { color } from "../../theme/color"
import { spacing } from "../../theme/spacing"
const { height, width } = Dimensions.get("window")
const FULL: ViewStyle = { flex: 1, backgroundColor: "white" }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  // paddingHorizontal: spacing[5],
}
export const ShowCaseScreen: FC<StackScreenProps<NavigatorParamList, "show">> = observer(
  ({ navigation, route }) => {
    const { item } = route.params

    const FoodItems = item.category

    const Prev = () => navigation.goBack()
    return (
      <View style={FULL}>
        <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
          <TouchableOpacity onPress={Prev}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 20, fontWeight: "bold" }}>{item.name}</Text>
        </View>
        <Image source={{ uri: item.image }} style={{ height: height / 3, width: width }} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 20,
              color: "#6bfc03",
            }}
          >
            Your Order
          </Text>
          <View
            style={{
              marginVertical: 10,
              backgroundColor: "white",
              elevation: 3,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16, margin: 10 }}>Selected Items :-</Text>
            <FlatList
              data={FoodItems}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ margin: 5, marginLeft: 20 }}>{item.title} </Text>
                  <Text style={{ marginRight: 10 }}>$$$</Text>
                </View>
              )}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text style={{ fontWeight: "bold" }}>Your picked item price:-</Text>
          </View>
          <View
            style={{
              marginVertical: 10,
              backgroundColor: "white",
              elevation: 3,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
            }}
          >
            <View style={{ margin: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "800" }}>item total</Text>
                <Text>$$$</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "800" }}>Resturant Promo</Text>
                <Text>$$</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "800" }}>
                  Delivery Charge for distance!
                </Text>
                <Text>$$</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "800" }}>
                  Govt. taxes and other charges!
                </Text>
                <Text>$$</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "800" }}>Feeding india donation!</Text>
                <Text>$</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "800" }}>Cash round off</Text>
                <Text>-$.$$</Text>
              </View>
              <View
                style={{
                  margin: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Grand Total</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>$$$</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop:height/10}}>
            <Button title="Order here" color="#6bfc03" onPress={() => Alert.alert("Order done")} />
          </View>
        </Screen>
      </View>
    )
  },
)
