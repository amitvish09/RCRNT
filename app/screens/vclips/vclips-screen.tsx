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
  Image,
  FlatList,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import apiHandler from "../../services/api/apiHandler"
import Slideshow from "react-native-slideshow"
import { SliderBox } from "react-native-image-slider-box"
const { width, height } = Dimensions.get("window")
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import FoodList from "../home/foodlist"
import ShowScreen from "./ShowScreen"

const FULL: ViewStyle = { flex: 1, backgroundColor: "white" }
const HEADERVIEW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: 30,
  marginTop: 45,
  marginBottom: 10,
  alignItems: "center",
}
export const VclipScreen: FC<StackScreenProps<NavigatorParamList, "vclip">> = observer(
  ({ navigation }) => {
    const [filter, setfilter] = useState(true)
    const [line, setline] = useState(false)
    const [ind, setind] = useState(null)
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

    // const [state, setstate] = useState({
    const Data = [
      {
        id: 1,
        name: "Popular",
        // image: require("./popular.jpg"),
      },
      {
        id: 2,
        name: "Fish Fried",
        // image: require("./masala-fried-pomfret.jpg"),
      },
      {
        id: 3,
        name: "Paneer",
        // image: require("./Butter-Paneer.jpeg"),
      },
      {
        id: 4,
        name: "Chicken",
        // image: require("./indian-butter-chicken.jpg"),
      },
    ]
    // })

    const DataImage = [
      {
        id: 1,
        image: require("./popular.jpg"),
        name: "Popular",
      },
      {
        id: 2,
        image: require("./masala-fried-pomfret.jpg"),
        name: "Fish Fried",
      },
      {
        id: 3,
        image: require("./Butter-Paneer.jpeg"),
        name: "Shahi-Paneer",
      },
      {
        id: 4,
        image: require("./indian-butter-chicken.jpg"),
        name: "Chicken Rice",
      },
    ]

    const Prev = () => navigation.goBack()
    const ListRef = React.useRef()
    return (
      <View testID="VclipScreen" style={FULL}>
        <View style={styles.hearderView}>
          <TouchableOpacity onPress={Prev}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>VideoClips</Text>
          <TouchableOpacity>
            <Ionicons name="md-search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView>
          {/* <View style={styles.headerHighlightContainer}>
            {Data.map((item, index) => {
              return (
                <View>
                  <View style={{}}>
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        // setline(true)
                        setind(index)
                      }}
                    >
                      <Text style={[styles.optionContainer]}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>

                  <View>{ind === index ? <View style={styles.filterState} /> : null}</View>
                </View>
              )
            })}

            <TouchableOpacity onPress={() => setfilter((prev) => !prev)}>
              <View>
                {filter ? (
                  <MaterialCommunityIcons
                    name="filter"
                    size={24}
                    color="grey"
                    style={{ marginLeft: 25 }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="filter-outline"
                    size={24}
                    color="grey"
                    style={{ marginLeft: 25 }}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View> */}

          <FlatList
            ref={ListRef}
            horizontal
            pagingEnabled
            alwaysBounceHorizontal
            showsVerticalScrollIndicator={false}
            data={DataImage}
            renderItem={({ item }) => (
              <View style={{ margin: 10 }}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.titleImage} />
                </TouchableOpacity>
                <Text style={styles.optionContainer}>{item.name}</Text>
              </View>
            )}
          />

          <Text style={[styles.headerHighlights]}>Regular Costier</Text>
          <View style={styles.foodContainer}>
            <FoodList
              items={filterResultsByPrice("$$")}
              // title="Cost Effective"
            />
          </View>
          <Text style={styles.headerHighlights}>High Costier</Text>
          <View style={styles.foodContainer}>
            <FoodList
              items={filterResultsByPrice("$")}
              // title="Cost Effective"
            />
          </View>
          <Text style={[styles.headerHighlights]}>Suggestion for you now</Text>
          <View style={styles.foodContainer}>
            <FoodList
              items={filterResultsByRating(4.5)}
              // title="Cost Effective"
            />
          </View>
        </ScrollView>
      </View>
    )
  },
)
const styles = StyleSheet.create({
  headContainer: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: "row",
    marginLeft: "43%",
  },

  hearderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  filterState: {
    borderBottomColor: "#42f548",
    position: "absolute",
    borderBottomWidth: 2,
    width: 15,
    alignSelf: "center",
    marginTop: 5,
  },
  optionContainer: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerHighlightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 20,
  },
  headerHighlights: { marginLeft: 20, fontSize: 17, fontWeight: "bold" },
  titleImage: { height: height / 3, width: width / 1.05, borderRadius: 16 },
  foodContainer: { flexDirection: "row", marginTop: 10, marginLeft: 20 },
})
