/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {  connect, Provider } from 'react-redux'
import { addTodo, toggleTodo, setVisibilityFilter, setInput  } from '../../redux/actions'
import TodoList from '../presentational/TodoList'
import AddTodoForm from './AddTodoForm';

class App extends Component {
  componentDidMount() {
    const { addTodo } = this.props 
    addTodo('First todo')
    addTodo('Second todo')
    addTodo('Third todo')
    addTodo('Fourth todo')
    addTodo('Fifth todo')
  }
  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    const { todos, input, setInput, toggleTodo, addTodo } = this.props
    return (
      <View style={styles.container}>
          <TodoList todos={todos} onTodoTap={toggleTodo} />
          <AddTodoForm input={input} setInput={setInput} addTodo={addTodo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50
  },
})

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
  input: state.input
})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  setInput: input => dispatch(setInput(input)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)