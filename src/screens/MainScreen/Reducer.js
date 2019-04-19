import { Actions } from './Actions'
import { ComponentState } from '../../components/ActionContainer'


const defaultState = {
    componentState: ComponentState.CONTENT,
    currentNews: null
}

export const MainScreenReducer = (prevState = defaultState, action) => {
    switch (action.type) {
        case Actions.LOADING: {
            return {
                ...prevState,
                componentState: ComponentState.LOADING
            }
        }
        case Actions.LOADING_SUCCESS: {
            return {
                ...prevState,
                componentState: ComponentState.CONTENT,
                currentNews: action.payload.newsList,
            }
        }

        case Actions.LOADING_FAIL: {
            return {
                ...prevState,
                componentState: ComponentState.ERROR
            }
        }

        default: {
            return prevState
        }
    }
}