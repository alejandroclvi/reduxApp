import { createStore, compose, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'; - don't know why would I use it yet
import rootReducer from './reducers'
import { input }  from './middleware/input'

console.log(input);

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(
            input
        )
    )
)