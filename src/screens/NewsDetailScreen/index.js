import React from 'react'
import {
    YellowBox
} from 'react-native'
import {
    Card,
    Text,
    CardItem,
    Body
} from 'native-base'

import PropTypes from 'prop-types'
import { styles } from '../../components/Styles'

export class NewsDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Новости',
        headerStyle: {
            backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff'
    }

    static propTypes = {
        navigateTo: PropTypes.string,
        navigation: PropTypes.object
    }

    state = {
        newsId: null,
        title: '',
        description: '',
        publishedAt: ''
    }


    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated'
        ])
    }

    componentDidMount() {
        const newsId_ = this.props.navigation.getParam('newsId')
        const nTitle = this.props.navigation.getParam('nTitle')
        const nDesc = this.props.navigation.getParam('nDesc')
        const nPub = this.props.navigation.getParam('nPub')
        this.setState({
            newsId: newsId_, title: nTitle,
            description: nDesc, publishedAt: nPub
        })
    }

    render() {
        return (
            <Card style={styles.cardStyle}>
                <CardItem header>
                    <Text>{this.state.title}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.cardTextSmall}>{this.state.description}</Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>{this.state.publishedAt}</Text>
                </CardItem>
            </Card>
        )
    }
}