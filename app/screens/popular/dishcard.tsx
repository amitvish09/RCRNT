import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native"

const { width, height } = Dimensions.get("window")

const DishCard = ({ item }) => {
  const navigation = useNavigation()
  const data = {
    image: item.image_url,
    name: item.name,
    location: item.alias,
    category: item.categories,
    loaction: item.location,
    transaction: item.transactions,
    price: item.price,
    rating: item.rating,
    review: item.review_count,
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("show", { item: data })
        }}
      >
        <Image style={styles.image} source={{ uri: item.image_url }} />
        <View style={styles.ratingContainer}>
          <Text style={styles.ratings}>{item.rating}</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.maker}>by user</Text>
            <Text style={styles.recommended}>{item.review_count} recommended</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default DishCard

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "white",
    marginHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    height: 260,
    width: "auto",
  },
  image: {
    height: "80%",
    width: "auto",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    marginLeft: 20,
    color: "#6bfc03",
    fontSize: 13,
    fontWeight: "bold",
  },
  maker: {
    marginLeft: 20,
    fontSize: 13,
  },
  recommended: {
    marginRight: 20,
    color: "grey",
    fontSize: 12,
  },
  ratingContainer: {
    marginTop: 175,
    position: "absolute",
    marginLeft: width / 1.35,
    backgroundColor: "#f5cb42",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  ratings: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  dishImage: {
    position: "absolute",
    marginTop: 218,
    marginLeft: 15,
    width: 35,
    height: 35,
    borderRadius: 18,
  },
})
