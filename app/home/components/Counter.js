import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Button from 'app/common/Button';
import {container, content, label, footer} from 'app/common/commonStyles';

var styles = StyleSheet.create({
    container,
    content,
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
                    <Button onPress={increment}>
                        Increase
                    </Button>
                    <Button onPress={decrement}>
                        Decrease
                    </Button>
                    <Text style={label}>Counter: {counter}</Text>
                </View>


                <View style={[styles.footer, styles.content]}>
                    <Button onPress={openProfile}>
                        Open User Profile
                    </Button>
                </View>

            </View>
        )
    }
}

export default Counter;