import React, { Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home Screen</Text>
                <Button style={styles.btn}
                   title = "Add Book"
                   onPress={() => this.props.navigation.navigate('AddBook')}
                />
                <Button 
                   style = {styles.btn}
                   title = "List of Books"
                   color = "green"
                   onPress={() => this.props.navigation.navigate('List')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
        backgroundColor: '#ebebeb',
        paddingTop: 23,
    },
    title: {
		fontSize: 25,
		color: 'blue',
        textAlign: 'center',
        textShadowColor: 'red',
        textShadowRadius: 2,
        padding: 25,
        fontWeight: 'bold',
    },
    btn: {
        padding: 20,
        margin: 25,
    }
    
});