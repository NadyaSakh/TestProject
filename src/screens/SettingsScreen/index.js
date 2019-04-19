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
import { styles } from '../../components/Styles'

export class SettingsScreen extends React.Component {

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated'
        ])
    }

    render() {
        return (
            <Card style={styles.cardStyle}>
                <CardItem>
                    <Body>
                        <Text style={styles.cardText}>
                            Настройки пока не готовы. Работаю над этим :)
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}