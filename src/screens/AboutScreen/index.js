import React from 'react'
import {
    YellowBox
} from 'react-native'
import MapView from 'react-native-maps'

import { styles } from '../../components/Styles'


export class AboutScreen extends React.Component {
    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated'
        ])
    }

    render() {
        return (
            <MapView
                style={styles.mapViewStyle}
                region={{
                    latitude: 48.48271,
                    longitude: 135.08379,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: 48.48271,
                        longitude: 135.08379
                    }}
                    title={'Хабаровск'}
                    description={'Наш любимый город:)'}
                />
            </MapView>
        )
    }
}