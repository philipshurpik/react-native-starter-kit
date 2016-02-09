import React, {Component, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 44
    },
    button: {
        fontSize: 20,
        color: 'green'
    }
});

class Counter extends Component {
    render() {
        const {counter, increment, decrement} = this.props;
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
            </View>
        )
    }
}

export default Counter;