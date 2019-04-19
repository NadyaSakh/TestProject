import React from 'react'
import {
    View,
    ActivityIndicator,
    Alert,
    FlatList
} from 'react-native'
import {
    ListItem,
    Text,
    Left,
    Right,
    Icon
} from 'native-base'

import { styles } from '../../components/Styles'
import PropTypes from 'prop-types'


export const LoadingView = props => {
    LoadingView.propTypes = {
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }
    return <View>
        <Text style={styles.textStyle}> {props.text} </Text>
        <ActivityIndicator/>
    </View>
}

export const ContentView = props => {
    ContentView.propTypes = {
        currentNews: PropTypes.array,
        day: PropTypes.string,
        isChecked: PropTypes.bool,
        onPress: PropTypes.func,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    }

    return <View>
        <Text>Сегодня: {props.day}</Text>
        <NewsList
            currentNews={props.currentNews}
            onPress={props.onPress}
            style={props.style}
            isChecked={props.isChecked}
        />
    </View>
}

export const NewsList = props => {
    NewsList.propTypes = {
        currentNews: PropTypes.array,
        isChecked: PropTypes.bool,
        onPress: PropTypes.func,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    }

    return <FlatList
        data={props.currentNews}
        renderItem={({item}) => {
            return (
                <ListItem
                    style={props.isChecked ? styles.blue : props.style}
                    onPress={() => {
                        props.onPress ?
                            props.onPress(item.id, item.title, item.description, item.publishedAt) :
                            Alert.alert('Внимание!', 'Обработчик нажатия не назначен')
                    }}
                >
                    <Left>
                        <Text>{item.title}</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>
            )
        }}
        keyExtractor={(item, index) => index.toString()}
    />
}




