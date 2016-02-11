import React, {Component, View, Text, StyleSheet, PropTypes} from 'react-native'

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(150,150,150,0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 10,
        fontSize: 25,
        alignSelf: 'center',
        color: 'orange'
    }
});

const Loader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Loading...'}
            </Text>
        </View>
    )
};

export default Loader;