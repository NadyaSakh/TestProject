import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20
    },

    sideMenuProfileIcon:
        {
            resizeMode: 'center',
            width: 150,
            height: 150,
            borderRadius: 150 / 2
        },

    sideMenuIcon:
        {
            resizeMode: 'center',
            width: 28,
            height: 28,
            marginRight: 10,
            marginLeft: 20
        },

    menuText: {
        fontSize: 15,
        color: '#222222'
    },

    menuView1: {
        width: '100%',
        height: 1,
        backgroundColor: '#e2e2e2',
        marginTop: 15
    },

    menuView2: {
        width: '100%'
    },

    menuElement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    menuFooter: {
        width: '100%',
        height: 1,
        backgroundColor: '#e2e2e2',
        marginTop: 15
    },

    menuIcon: {
        width: 25,
        height: 25,
        marginLeft: 5
    },

    menuIconView: {
        flexDirection: 'row'
    },

    mapViewStyle: {
        flex: 1
    },

    cardStyle: {
        borderRadius: 15,
        backgroundColor: '#fdffe2',
        opacity: 0.8
    },

    cardText: {
        fontSize: 20
    },

    cardTextSmall: {
        fontSize: 14
    },

    textStyle: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        color: 'black'
    },
    buttonStyle: {
        marginLeft: 50,
        marginRight: 50,
        // margin: 20,
        borderRadius: 25,
        backgroundColor: '#A57C52'
    },
    butText: {
        color: 'white',
        fontSize: 18
    },

    black: {
        backgroundColor: '#5e5e5e'
    },
    white: {
        backgroundColor: '#ffffff'
    },
    blue: {
        backgroundColor: '#cde1f9'
    }

})