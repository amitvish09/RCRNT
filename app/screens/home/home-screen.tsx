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
import { AntDesign, Ionicons } from "@expo/vector-icons"
import FoodList from "./foodlist"
import apiHandler from "../../services/api/apiHandler"
const { height, width } = Dimensions.get("window")

const FULL: ViewStyle = { flex: 1, backgroundColor: "white" }
const TEXT: TextStyle = {
  color: "black",
  fontWeight: "bold",
}
const TITLE: TextStyle = {
  ...TEXT,
  fontSize: 18,
}
const TEXTTITLE: TextStyle = {
  ...TITLE,
  marginLeft: 20,
  marginTop: 30,
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: "100%",
  height: height,
  position: "absolute",
}

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  ({ navigation }) => {
    // const [sideMenu, setsideMenu] = useState(true)
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
      <View testID="HomeScreen" style={FULL}>
        {/* <Image source={backgroundImg} style={BOWSER} /> */}

        <View style={styles.headContainer}>
          <Text style={{ marginLeft: 24 }}></Text>
          {/* <TouchableOpacity onPress={() => setsideMenu((prev) => !prev)}>
            {sideMenu ? (
              <AntDesign name="menu-fold" size={24} color="black" />
            ) : (
              <AntDesign name="menu-unfold" size={24} color="black" />
            )}
          </TouchableOpacity> */}
          <Text style={TITLE}>HomeChef</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.headMessageContainer}>
            <Text style={{ fontSize: 14, color: "black", fontWeight: "700" }}>Hi User,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "black" }}>Good afternoon</Text>
          </View>

          <Text style={TEXTTITLE}>Suggestion for you now</Text>
          <View style={styles.foodContainer}>
            <FoodList
              items={filterResultsByPrice("$$")}
              // title="Cost Effective"
            />
          </View>

          <Text style={TEXTTITLE}>Top Food Reviews</Text>
          <View style={styles.foodContainer}>
            <FoodList
              items={filterResultsByRating(4.5)}
              // title="Trending Item"
            />
          </View>
        </ScrollView>
      </View>
    )
  },
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  headMessageContainer: { marginLeft: 20, marginTop: 20 },
  chefListContainer: {
    flexDirection: "row",
    backgroundColor: "#FAFCFA",
    marginLeft: 20,
    borderBottomLeftRadius: width * 0.03,
    borderTopLeftRadius: width * 0.03,
    marginTop: 10,
  },
  foodContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
})
