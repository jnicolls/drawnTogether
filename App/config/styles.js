import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#183464",
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 5,
        fontFamily: 'Avenir',
        color: 'white',
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
        justifyContent: 'flex-start',
        marginTop: 20
    },
    baseText: {
        fontFamily: 'Avenir',
        color: 'white',
        fontSize: 18
    },
    curatorText: {
        padding: 10,
        fontSize: 16
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        height: win.height,
    },
    profilePhoto: {
        width:80,
        height:80,
        paddingHorizontal: 15
    },
    profileName:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    leftAlign: {
        textAlign: 'left',
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    profileDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    textPadding: {
        paddingLeft: 15
    },
    bold: {
        fontWeight: 'bold'
    },
    centeredHeading: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    topMargin: {
        marginTop: 10
    },
    centerText: {
        textAlign: 'center'
    }
});
