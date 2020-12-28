import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.box}>
        <Text style={styles.info}>Book: {item.Book}</Text>
        <Text style={styles.detial}>Authore: {item.Authore}</Text>
        <Text style={styles.detial}>Description: {item.Description}</Text>
        <Text style={styles.detial}>Rating: {item.rating}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.items} renderItem={this.renderItem} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  box: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    margin: 15,
  },
  info: {
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 20,
  },
  detial: {
    fontWeight: "normal",
    justifyContent: "space-around",
    fontSize: 15,
  },
});
