import React from 'react'
import {
    TouchableOpacity,
    Image,
    View
} from 'react-native'
import PropTypes from 'prop-types'

import {LOG} from '../Utils/logger'
import {styles} from './Styles'

export class MenuIcon extends React.Component {
    static propTypes = {
        navigationProps: PropTypes.object,
    }

    toggleDrawer = () => {
        LOG(this.props.navigationProps, 'header')
        this.props.navigationProps.toggleDrawer()
    }

    render() {
        return (
            <View style={styles.menuIconView}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={{uri: 'https://www.flaticon.com/premium-icon/icons/svg/1665/1665684.svg'}}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}