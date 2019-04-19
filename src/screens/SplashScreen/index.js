import React from 'react'
import {
    ActivityIndicator,
    StatusBar,
    View,
    Text
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { navigateToApp } from './Actions'
import { styles } from '../../components/Styles'

const mapStateToProps = state => ({...state.splashScreenReducer})

const mapDispatchToProps = dispatch => ({
    navToAction: () => dispatch(navigateToApp())
})

class SplashScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        navigateTo: PropTypes.string,
        navToAction: PropTypes.func
    }

    componentDidUpdate = prevProps => {
        if (this.props.navigateTo !== prevProps.navigateTo) {
            this.props.navigation.navigate(this.props.navigateTo)
        }
    }

    componentDidMount = () => {
        this.props.navToAction()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Загрузка приложения</Text>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)