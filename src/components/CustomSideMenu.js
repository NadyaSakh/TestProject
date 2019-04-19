import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import { styles } from './Styles'
import PropTypes from 'prop-types'

export class CustomSideMenu extends React.Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                <Image source={{uri: 'https://www.flaticon.com/premium-icon/icons/svg/1146/1146324.svg'}} style={styles.sideMenuProfileIcon}/>
                <View style={styles.menuView1}/>
                <View style={styles.menuView2}>
                    <View style={styles.menuElement}>
                        <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg'}} style={styles.sideMenuIcon}/>
                        <Text style={styles.menuText} onPress={() => {
                            this.props.navigation.navigate('First')
                        }}> Главная </Text>
                    </View>

                    <View style={styles.menuElement}>
                        <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg'}} style={styles.sideMenuIcon}/>
                        <Text style={styles.menuText} onPress={() => {
                            this.props.navigation.navigate('Second')
                        }}> Настройки </Text>
                    </View>

                    <View style={styles.menuElement}>
                        <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg'}} style={styles.sideMenuIcon}/>
                        <Text style={styles.menuText} onPress={() => {
                            this.props.navigation.navigate('Third')
                        }}> Помощь </Text>
                    </View>

                    <View style={styles.menuElement}>
                        <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg'}} style={styles.sideMenuIcon}/>
                        <Text style={styles.menuText} onPress={() => {
                            this.props.navigation.navigate('Forth')
                        }}> О нас </Text>
                    </View>
                </View>
                <View style={styles.menuFooter}/>
            </View>
        )
    }
}