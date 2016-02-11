import React, {Component, StyleSheet, View, Text, TouchableOpacity, PropTypes} from 'react-native';
import Button from 'react-native-button';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 80
    },
    button: {
        fontSize: 20,
        color: 'green'
    }
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