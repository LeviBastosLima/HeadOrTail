import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';


const heads = require('../assets/imgs/moeda_cara.png')
const tails = require('../assets/imgs/moeda_coroa.png')

export default class Game extends Component {

    constructor(props) {
        super(props)

        this.state = { image: null, result: '', win: 0, lose: 0 }
    }

    headOrTail(option) {
        let num = Math.round(100 * Math.random())
        if (num % 2 == 0) {
            if (option == 'head') this.setState({ result: 'Venceu', image: heads, win: this.state.win + 1 })
            else this.setState({ result: 'perdeu', image: heads, lose: this.state.lose + 1 })
        }
        else {
            if (option == 'tail') this.setState({ result: 'Venceu', image: tails, win: this.state.win + 1 })
            else this.setState({ result: 'perdeu', image: tails, lose: this.state.lose + 1 })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={this.state.image} />
                    <Text style={styles.imageResult}>Resultado: {this.state.result}</Text>

                </View>
                <View style={styles.results}>
                    <Text style={styles.resultsText}>Vitórias: {this.state.win}</Text>
                    <Text style={styles.resultsText}>Derrotas: {this.state.lose}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={() => this.headOrTail('head')}
                    >
                        <Text style={styles.btnText}>Cara</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.btn}
                        onPress={() => this.headOrTail('tail')}
                    >
                        <Text style={styles.btnText}>Coroa</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#59B28C'
    },
    image: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    imageResult: {
        marginTop: 15,
        fontSize: 22,
        color: 'white'
    },
    results: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 30
    },
    resultsText: {
        color: 'white',
        fontSize: 18
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        backgroundColor: '#fdfd96',
        elevation: 6,
        padding: 10,

    },
    btnText: {
        color: '#C0C0C0',
        fontSize: 16
    }
})
