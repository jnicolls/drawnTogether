import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9e8ee",
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        margin: 5
    },
    image: {
        alignSelf: 'stretch',
        width: win.width,
        height: win.height
    },
    bannerTop: {
      color: 'white',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    bannerBottom: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10
    },
    detailTop: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    },
    detailBottom: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
        marginRight: 10,
        textAlign: 'right',
        textDecoration: 'underline'
    },
    margin: {
        margin: 20
    },
    profileBar: {
        paddingLeft: 20,
        width: win.width,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    baseText: {
        fontFamily: 'Avenir',

    },
    curatorText: {
        padding: 10,
        fontSize: 18
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        height: win.height,
    }

});
