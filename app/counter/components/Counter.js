import React, {Component, StyleSheet, View, Text, TouchableOpacity, PropTypes} from 'react-native';
import Button from 'react-native-button';
import {container, content, button, label, footer} from 'commonStyles';

var styles = StyleSheet.create({
    container,
    content,
    button,
    label,
    footer
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
                <View style={styles.content}>
                    <Button style={styles.button}
                            onPress={increment}>
                        Increase
                    </Button>
                    <Button style={styles.button}
                            onPress={decrement}>
                        Decrease
                    </Button>
                    <Text style={label}>Counter: {counter}</Text>
                </View>


                <View style={[styles.footer, styles.content]}>
                    <Button style={styles.button}
                            onPress={openProfile}>
                        Open User Profile
                    </Button>
                </View>

            </View>
        )
    }
}

export default Counter;