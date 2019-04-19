import { Actions } from './Actions'
import { ScreensKeys } from '../../ScreenKeys'

const defaultState = {
    navigateTo: ''
}

export const splashScreenReducer = (prevState = defaultState, action) => {
    if(action.type === Actions.NAVIGATE_TO_APP){
        return {
            navigateTo: ScreensKeys.APP
        }
    }
    else{
        return prevState
    }
}