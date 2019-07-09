import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from "react-native"

import { Icon } from 'native-base'

class AQIupload extends Component {

    static navigationOptins = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-camera" style={{ color: 
            tintColor }} />
        )
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>AQIupload</Text>
            </View>
        )
    }
}

export default AQIupload