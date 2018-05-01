const initInput = '';
export const input = (state = initInput, action) => {
    switch(action.type) {
        case 'SET_INPUT':
            return action.input
        default:
            return state
    }
}