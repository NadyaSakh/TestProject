import React from 'react'
import {Dimensions } from 'react-native'
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import { Provider } from 'react-redux'

import { store } from './Store'
import { ScreensKeys } from './ScreenKeys'
import SplashScreen from './screens/SplashScreen'
import  MainScreen  from './screens/MainScreen'
import { SettingsScreen } from './screens/SettingsScreen'
import { HelpScreen } from './screens/HelpScreen'
import { AboutScreen } from './screens/AboutScreen'
import { CustomSideMenu } from './components/CustomSideMenu'
import { MenuIcon } from './components/MenuIcon'
import { NewsDetailScreen } from './screens/NewsDetailScreen'


export const FirstActivity_StackNavigator = createStackNavigator({
    [ScreensKeys.MAIN]: {
        screen: MainScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Главная',
            headerLeft: <MenuIcon navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
    [ScreensKeys.NEWS_DETAIL]: {
        screen: NewsDetailScreen
    }
})

export const SecondActivity_StackNavigator = createStackNavigator({
    Second: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Настройки',
            headerLeft: <MenuIcon navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    }
})

export const ThirdActivity_StackNavigator = createStackNavigator({
    Third: {
        screen: HelpScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Помощь',
            headerLeft: <MenuIcon navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    }
})

export const ForthActivity_StackNavigator = createStackNavigator({
    Forth: {
        screen: AboutScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'О нас',
            headerLeft: <MenuIcon navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    }
})

export const MyDrawerNavigator = createDrawerNavigator({
    MainStack: {
        screen: FirstActivity_StackNavigator
    },
    SecondStack: {
        screen: SecondActivity_StackNavigator
    },
    ThirdStack: {
        screen: ThirdActivity_StackNavigator
    },
    ForthStack: {
        screen: ForthActivity_StackNavigator
    }

},
{
    contentComponent: CustomSideMenu,
    drawerWidth: Dimensions.get('window').width - 130
}
)

const RootStack = createStackNavigator(
    {
        [ScreensKeys.SPLASH]: {
            screen: SplashScreen,
        },
        [ScreensKeys.APP]: {
            screen: MyDrawerNavigator,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: ScreensKeys.SPLASH
    },

)

const AppContainer = createAppContainer(RootStack)


export class App extends React.Component {
    render = () =>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
}