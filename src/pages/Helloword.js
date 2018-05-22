import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Helloword extends Component<{}> {
    constructor() {
        super();
    }
    _navigasi() {
        console.log('kenavigasi gitu');
        //Alert('kenavigasi')
        //Actions.navigasi()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ backgroundColor: 'purple' }}>
                    Helloword
                </Text>
                <TouchableOpacity onPress={this._navigasi}><Text style={styles.signupButton}> Contoh Navigasi!!!</Text></TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});