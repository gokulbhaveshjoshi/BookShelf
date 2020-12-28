import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemComponent from "./component/ItemComponent";

import { db } from "../database/database";

let itemsRef = db.ref("/items");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ebebeb",
  },
  title: {
    fontSize: 25,
    color: "blue",
    textAlign: "center",
  },
});

export default class List extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book List</Text>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text>No items</Text>
        )}
      </View>
    );
  }
}
