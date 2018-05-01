let id = 0
const initTodos = []
export const todos = (state = initTodos, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            if(!action.text.trim()) {
                return state;
            }
            return [
                ...state,
                {
                    text:action.text,
                    completed:false,
                    id:id++
                }
            ]
        case 'TOGGLE_TODO':
            return state.map( todo => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        completed:!todo.completed
                    }
                }
                return todo
            })
        default:
            return state
    }
}