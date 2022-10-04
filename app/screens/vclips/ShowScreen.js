// import { StyleSheet, Text, View, Image, FlatList } from "react-native";
// import React from "react";
// import { StackScreenProps } from "@react-navigation/stack"

import React, { useRef } from "react"
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native"
const { width, height } = Dimensions.get("window")
const itemWidth = (width / 4) * 2
const padding = (width - itemWidth) / 2
const offset = itemWidth

const Data = [
  {
    id: 1,
    dish: "Popular",
    image: require("./popular.jpg"),
  },
  {
    id: 2,
    dish: "Fish Fried",
    image: require("./masala-fried-pomfret.jpg"),
  },
  {
    id: 3,
    dish: "Paneer",
    image: require("./Butter-Paneer.jpeg"),
  },
  {
    id: 4,
    dish: "Chicken",
    image: require("./indian-butter-chicken.jpg"),
  },
]

const ShowScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        snapToInterval={offset}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
      >
        {Data.map((x, i) => (
          <Item key={i} i={i} scrollX={scrollX} A={x.image} B={x.dish} C={x.season} />
        ))}
      </ScrollView>
    </View>
  )
}

function Item({ i, scrollX, A, B, C }) {
  const scale = scrollX.interpolate({
    inputRange: [-offset + i * offset, i * offset, offset + i * offset],
    outputRange: [0.75, 1, 0.75],
  })
  return (
    <Animated.View style={[styles.item, { transform: [{ scale }] }]}>
      <Image style={styles.imageContainer} source={A} />
      <Text style={styles.itemContainer}>{B}</Text>
      <Text style={styles.seasonContainer}>{C}</Text>
    </Animated.View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
  container: { marginTop: 12, marginRight: 16 },
  imageContainer: {
    width: 220,
    height: 120,
    borderRadius: 6,
  },
  itemContainer: { fontSize: 14, fontWeight: "bold" },
  seasonContainer: { color: "grey", fontSize: 12 },
  scrollView: {
    paddingHorizontal: padding,
    alignItems: "center",
  },
  item: {
    borderRadius: 6,
    // height: itemWidth,
    // width: itemWidth,
    // borderRadius: 10,
  },
})
