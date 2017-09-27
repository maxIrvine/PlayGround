import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Header } from './components/common';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curr_address: 'https://facebook.github.io/react/img/logo_og.png',
            curr_num: 1,
            list_address: ['https://facebook.github.io/react/img/logo_og.png', 'https://public-web-production-f.squarecdn.com/assets/pages/press/downloads/square.01-53fec4249b83cfa1fa474e6a9b3afa94.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Logo-Free.jpg', 'https://s.w.org/about/images/logos/wordpress-logo-simplified-rgb.png', 'https://netdna.webdesignerdepot.com/uploads/circular_logos/lg.jpg']
        }
    }

    handlePress() {
        var length = this.state.list_address.length;
        var new_address = this.state.list_address[this.state.curr_num];
        console.log(this.state.curr_num);
        this.setState({
            curr_num: this.state.curr_num + 1
        });
        if (this.state.curr_num === length-1) {
            this.setState({
                curr_num: 0
            });
        } 
        return this.setState({
            curr_address: new_address
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="Logos"/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={this.handlePress.bind(this)}>
                        <Image 
                            style={{width: 350, height: 350, borderRadius: 175}}
                            source={{uri: this.state.curr_address}}
                        />
                    </TouchableOpacity>
                </View> 
            </View>
        );
    }
}

export default App;