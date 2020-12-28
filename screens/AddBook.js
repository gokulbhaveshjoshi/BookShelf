import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { db } from "../database/database";

let addItem = (item1, item2, item3, item4) => {
  db.ref("/items").push({
    Book: item1,
    Authore: item2,
    Description: item3,
    rating: item4,
  });
};

const numStar = 5;
class Inputs extends Component {
  state = {
    Book: "",
    Authore: "",
    Description: "",
    rating: this.props.rating ?? 1,
    animation: new Animated.Value(1),
    numStar: this.props.numStar ?? 5,
  };
  animate = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeFriver: true,
    }).start(() => {
      this.state.animation.setValue(1);
    });
  };
  rate = (star) => {
    this.setState({
      rating: star,
    });
  };

  handleBook = (text) => {
    this.setState({
      Book: text,
    });
  };
  handleAuthore = (text) => {
    this.setState({
      Authore: text,
    });
  };
  handleDescription = (text) => {
    this.setState({
      Description: text,
    });
  };

  message = (Book, Authore, Description, rating) => {
    if (Book === "" || Authore === "") {
      alert("Add book name and authore");
    } else {
      addItem(Book, Authore, Description, rating);
      alert(
        "Book: " +
          Book +
          "\nAuthore: " +
          Authore +
          "\nDescription: " +
          Description +
          "\nRating: " +
          rating
      );
    }
  };

  render() {
    let stars = [];

    const animatedScale = this.state.animation.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: [1, 1.4, 1],
    });

    const animateOpacity = this.state.animation.interpolate({
      inputRange: [1, 1.2, 2],
      outputRange: [1, 0.5, 1],
    });

    const animateWobble = this.state.animation.interpolate({
      inputRange: [1, 1.25, 1.75, 2],
      outputRange: ["0deg", "-3deg", "3deg", "0deg"],
    });

    const animationStyle = {
      transform: [{ scale: animatedScale }, { rotate: animateWobble }],
      opacity: animateOpacity,
    };

    for (let x = 1; x <= numStar; x++) {
      stars.push(
        <TouchableWithoutFeedback
          key={x}
          onPress={() => {
            this.rate(x), this.animate();
          }}
        >
          <Animated.View style={x <= this.state.rating ? animationStyle : ""}>
            <Star filled={x <= this.state.rating ? true : false} />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add Book</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Book Title"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleBook}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Authore"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleAuthore}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Description"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleDescription}
        />

        <View style={styles.starRating}>{stars}</View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.message(
              this.state.Book,
              this.state.Authore,
              this.state.Description,
              this.state.rating
            )
          }
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

class Star extends React.Component {
  render() {
    return (
      <FontAwesome
        name={this.props.filled === true ? "star" : "star-o"}
        color="blue"
        size={32}
        style={{ marginHorizontal: 6 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a24f4",
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    margin: 15,
    height: 50,
    fontWeight: "bold",
    fontSize: 25,
    color: "blue",
    textAlign: "center",
    textShadowColor: "red",
    textShadowRadius: 2,

    textAlign: "center",
  },
  starRating: {
    flexDirection: "row",
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtontext: {
    color: "#ffffff",
    textAlign: "center",
  },
});
