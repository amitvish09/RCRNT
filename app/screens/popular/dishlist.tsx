import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import DishCard from "./dishcard"

const DishList = ({ title, items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return <DishCard item={item} />
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

export default DishList
