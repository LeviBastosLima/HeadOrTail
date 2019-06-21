import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux'

const logo = require('../assets/imgs/logo.png')
const play = require('../assets/imgs/botao_jogar.png')
const otherGames = require('../assets/imgs/outros_jogos.png')
const aboutGames = require('../assets/imgs/sobre_jogo.png')

export default class InitialScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.body}>

                    <Image source={logo} />

                    <TouchableHighlight
                        onPress={() => {Actions.game()}}
                    >
                        <Image source={play} style={styles.play} />
                    </TouchableHighlight>


                </View>
                <View style={styles.foot}>

                    <TouchableHighlight
                        onPress={() => Actions.other()}
                        underlayColor='#59B28C'
                        activeOpacity={0.5}
                    >
                        <Image source={otherGames} />
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => { Actions.about() }}
                        underlayColor='#59B28C'
                        activeOpacity={0.5}
                    >
                        <Image source={aboutGames} />
                    </TouchableHighlight>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6
    },
    head: {
        flex: 1
    },
    body: {
        flex: 4.3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#59B28C'
    },
    play: {
        marginTop: 10
    },
    foot: {
        flex: 0.7,
        backgroundColor: '#59B28C',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
