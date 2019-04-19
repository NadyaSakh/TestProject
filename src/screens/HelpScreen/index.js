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

export class HelpScreen extends React.Component {

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
                        <Text style={styles.cardText}> Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem.
                            Nulla consequat massa quis enim. Donec pede justo,
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                            Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                            Cras dapibus. Vivamus elementum semper nisi.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}