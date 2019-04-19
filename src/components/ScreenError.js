import React from 'react'
import {
    View
} from 'react-native'
import {
    Button,
    Text
} from 'native-base'

import PropTypes from 'prop-types'
import { LOG } from '../Utils/logger'
import { styles } from './Styles'

export const ErrorView = props => {
    ErrorView.propTypes = {
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onRepeat: PropTypes.func
    }

    return <View>
        <Text style={styles.textStyle}> {props.text}</Text>
        <Button
            style={styles.buttonStyle}
            onPress={() => {
                props.onRepeat()
                LOG('Повторить')
            }}
        >
            <Text style={styles.butText}>Повторить</Text>
        </Button>
    </View>
}