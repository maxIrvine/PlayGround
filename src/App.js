import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Header } from './components/common';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curr_address: 'https://facebook.github.io/react/img/logo_og.png',
            curr_name: 'React',
            curr_num: 1,
            list_address: ['https://facebook.github.io/react/img/logo_og.png', 'https://public-web-production-f.squarecdn.com/assets/pages/press/downloads/square.01-53fec4249b83cfa1fa474e6a9b3afa94.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Logo-Free.jpg', 'https://s.w.org/about/images/logos/wordpress-logo-simplified-rgb.png', 'https://netdna.webdesignerdepot.com/uploads/circular_logos/lg.jpg', 'https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg', 'https://i.amz.mshcdn.com/K1p5PL4669x6LLyGzxlqe25Xtsc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F475500%2Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Pepsi_logo.svg/1280px-Pepsi_logo.svg.png'],
            list_name: ['React', 'Square', 'Fanta', 'Wordpress', 'LG', 'Lion', 'Play Store', 'Pepsi']
        }
    }

    handlePress() {
        var length = this.state.list_address.length;
        var new_address = this.state.list_address[this.state.curr_num];
        var new_name = this.state.list_name[this.state.curr_num];
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
            curr_address: new_address,
            curr_name: new_name
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="Logos"/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{marginBottom: 50, fontSize: 40}}>{this.state.curr_name}</Text>
                    <TouchableOpacity onPress={this.handlePress.bind(this)}>
                        <Image 
                            style={{width: 350, height: 350, borderRadius: 175, marginBottom: 50}}
                            source={{uri: this.state.curr_address}}
                        />
                    </TouchableOpacity>
                </View> 
            </View>
        );
    }
}

export default App;