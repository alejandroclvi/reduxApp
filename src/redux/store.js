import { createStore, compose, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'; - don't know why would I use it yet
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { input }  from './middleware/input'


const loggerMiddleware = createLogger()

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(
            input,
            loggerMiddleware
        )
    )
)