
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView, createDrawerNavigator } from 'react-navigation'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../images/logo.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../images/logo.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyApp = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});

export default class Navigation extends Component {
    render() {
        return (
            <MyApp />
        )
    }
}