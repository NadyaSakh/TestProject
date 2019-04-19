import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

import { splashScreenReducer } from './screens/SplashScreen/Reducer'
import { logger } from 'redux-logger'
import { MainScreenReducer } from './screens/MainScreen/Reducer'
import { getNewsEpic } from './screens/MainScreen/Actions'

export const rootReducer = combineReducers({
    splashScreenReducer,
    MainScreenReducer
})

export const rootEpic = combineEpics(
    getNewsEpic
)

export const epicMiddleware = createEpicMiddleware()

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        logger,
        epicMiddleware
    )
)

epicMiddleware.run(rootEpic)