import React, {Component, StyleSheet, View, Text, TouchableOpacity, PropTypes} from 'react-native';
import Button from 'react-native-button';
import {container, button} from 'commonStyles';

var styles = StyleSheet.create({
    container,
    button
});

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        openProfile: PropTypes.func.isRequired
    };

    render() {
        const {counter, openProfile, increment, decrement} = this.props;
        return (
            <View style={styles.container}>
                <Button style={styles.button}
                        onPress={increment}>
                    Increase
                </Button>
                <Button style={styles.button}
                        onPress={decrement}>
                    Decrease
                </Button>
                <Text>Counter: {counter}</Text>
                <Button style={styles.button}
                        onPress={openProfile}>
                    Open User Profile
                </Button>
            </View>
        )
    }
}

export default Counter;