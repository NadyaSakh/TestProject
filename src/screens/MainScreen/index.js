import React from 'react'
import {
    YellowBox
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ActionContainer } from '../../components/ActionContainer'
import { ContentView, LoadingView } from './Components'
import { ErrorView } from '../../components/ScreenError'
import { getNewsAction } from './Actions'
import { LOG } from '../../Utils/logger'
import {styles} from '../../components/Styles'
import { ScreensKeys } from '../../ScreenKeys'

export const mapStateToProps = state => ({
    ...state.MainScreenReducer
})

export const mapDispatchToProps = dispatch => ({
    getNews: () => dispatch(getNewsAction())
})


export class MainScreen extends React.Component {
    static propTypes = {
        componentState: PropTypes.string.isRequired,
        currentNews: PropTypes.array,
        getNews: PropTypes.func,
        navigateTo: PropTypes.string,
        navigation: PropTypes.object
    }

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated'
        ])
    }

    componentDidMount() {
        this.props.getNews()
    }

    //вычислить сегодняшнюю дату
    //можно сделать фильтр вчера, сегодня новостей
    getDay = () => {
        let dateString = ' '

        let newDate = new Date()
        dateString += (newDate.getMonth() + 1) + '.'
        dateString += newDate.getDate() + '.'
        dateString += newDate.getFullYear()

        LOG(dateString)
        return dateString
    }


    onNewsPress = (id, title, description, publishedAt) => {
        this.props.navigation.navigate(ScreensKeys.NEWS_DETAIL,
            {newsId: id, nTitle: title, nDesc: description,
                nPub: publishedAt })
    }


    render() {
        return (
            <ActionContainer
                componentState={this.props.componentState}
                contentView={
                    <ContentView
                        currentNews={this.props.currentNews}
                        day={this.getDay()}
                        onPress={this.onNewsPress}
                        isChecked={false}
                        style={styles.white}
                    />
                }
                errorVisibility={false}
                errorView={
                    <ErrorView
                        text='Ошибка. Новости не загружены.'
                        onRepeat={this.props.getNews}
                    />
                }
                loadingView={
                    <LoadingView
                        text={'Загрузка новостей. Пожалуйста, подождите.'}/>
                }
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)