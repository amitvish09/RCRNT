import React from "react"
import { View, StyleSheet, FlatList } from "react-native"
import FoodHome from "./foodcard"

const FoodList = ({ title, items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={items}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return <FoodHome item={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
})

export default FoodList
