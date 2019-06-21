import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux'

import InitialScreen from './src/screens/InitialScreen'
import OtherGamesScreen from './src/screens/OtherGamesScreen'
import AboutGameScreen from './src/screens/AboutGameScreen'
import Game from './src/screens/Game'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key='initial' component={InitialScreen} initial title='Cara ou Coroa' />
                    <Scene key='other' component={OtherGamesScreen} title='Outros jogos' />
                    <Scene key='about' component={AboutGameScreen} title='Sobre o jogo' />
                    <Scene key='game' component={Game} title='Cara ou Coroa' />
                </Stack>
            </Router>
        );
    }
}
