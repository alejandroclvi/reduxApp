/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { connect } from 'react-redux'
import { setVisibilityFilter, toggleTodo } from '../../redux/actions'
import TodoList from '../presentational/TodoList'

getVisibleTodos = (todos, visibilityFilter) => {
    switch(visibilityFilter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => todo.completed)
        case 'SHOW_COMPLETED':
            return todos.filter( todo => !todo.completed)
        default:
            return todos
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    onTodoTap: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)