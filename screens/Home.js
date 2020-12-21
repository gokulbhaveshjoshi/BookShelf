import React, { Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <Button
                   title = "Add Book"
                   onPress={() => this.props.navigation.navigate('AddItem')}
                />
                <Button
                   title = "List of Books"
                   color = "green"
                   onPress={() => this.props.navigation.navigate('List')}
                />
            </View>
        );
    }
}