import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

const FoodHome = ({ item }) => {
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
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("show", { item: data })
          }}
        >
          <Image style={styles.image} source={{ uri: item.image_url }} />

          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={styles.title}>{item.name.slice(0, 22)}</Text>
              <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
            </View>
            <View>
              <Text style={styles.maker}>Contact:- {item.display_phone}</Text>
              <Text style={styles.recommended}>{item.review_count} recommended</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FoodHome

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "white",
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    width: 200,
    height: 230,
  },
  title: {
    // marginLeft: 20,
    fontSize: 12,
    fontWeight: "bold",
    color: "#6bfc03",
  },
  maker: {
    // marginLeft: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  recommended: {
    color: "grey",
    fontSize: 11,
  },
  image: {
    height: "65%",
    width: "auto",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 12,
    marginHorizontal: 6,
    padding: 4,
    backgroundColor: "#f5cb42",
    color: "#fff",
    borderRadius: 5,
  },
  chefIcon: {
    position: "absolute",
    marginTop: 12,
    marginHorizontal: 12,
    width: 35,
    height: 35,
    borderRadius: 18,
  },
})
