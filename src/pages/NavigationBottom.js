
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// components icon
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
                <Text>
                    Home screen bro !!!!
                </Text>
            </View>
        )
    }
}

class SettingScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                <Text>
                    Setting screen bro !!!!
                </Text>
            </View>
        )
    }
}

export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                // <Icon name="ios-home" size={24} selectedIconName="ios-person" />
                <Icon name="home" size={20} color="#4F8EF7" />
            )
        }

    },

    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user" size={24} />
            )
        }

    },
})