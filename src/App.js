import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header headerText="Playground"/>
        );
    }
}

export default App;