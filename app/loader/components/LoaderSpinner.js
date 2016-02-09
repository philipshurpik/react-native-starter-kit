import React, {Component, View, Text, StyleSheet, PropTypes} from 'react-native'

var styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 100
    },
    text: {
        padding: 10,
        fontSize: 25,
        alignSelf: 'center',
        color: 'orange'
    }
});

const LoaderSpinner = ({loading}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {loading ? 'Loading...' : ''}
            </Text>
        </View>
    )
};

LoaderSpinner.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default LoaderSpinner;