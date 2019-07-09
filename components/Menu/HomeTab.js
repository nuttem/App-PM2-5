import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from "react-native"


import { Icon } from 'native-base'
import { MapView } from 'expo'

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color:
            tintColor }} />
        )
    }

    render() {
        return (
            <AppTapNavigator />
        )
    }
}

export default HomeTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});