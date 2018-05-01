import { setInput } from '../actions/input'

const toNothing = '';

// this middleware only cares about the addTodo action, in order to clear out the TextInput value
export const input = ({dispatch}) => next => action => {
    next(action);
  
    if (action.type === 'ADD_TODO') {
        // clear input
        dispatch(setInput(toNothing));
    }
};