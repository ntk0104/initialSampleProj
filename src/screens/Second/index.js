import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles'

class SecondScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Second</Text>
                <TouchableOpacity style={{ padding: 20, backgroundColor: 'white' }} onPress={() => this.props.navigation.navigate('modal')}>
                    <Text>Open Modal of screen Second</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SecondScreen