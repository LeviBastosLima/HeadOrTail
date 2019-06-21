import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

const backBnt = require('../assets/imgs/botao_voltar.png')

export default class NavigatorBar extends Component {
    render() {

        return (    
            <View style={styles.nav}>
                <StatusBar 
                    hidden
                />
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'rgb(210,210,210)',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    text: {
        color: 'rgb(0,0,0)',
        fontSize: 18
    }
})
