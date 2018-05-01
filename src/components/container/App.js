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
import { addTodo, toggleTodo, setInput  } from '../../redux/actions'
import VisibleTodoList from './VisibleTodoList'
import AddTodoForm from '../presentational/AddTodoForm';
import Footer from '../presentational/Footer'

const FILTERS = [{name:'Active', constant:'SHOW_ACTIVE'},{name:'Completed', constant:'SHOW_COMPLETED'}, {name:'All', constant:'SHOW_ALL'}]

const App = ({todos, input, setInput, toggleTodo, addTodo }) => (
  <View style={styles.container}>
      <VisibleTodoList todos={todos} />
      <AddTodoForm input={input} setInput={setInput} addTodo={addTodo} />
      <Footer filters={FILTERS} />
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50
  },
})

const mapStateToProps = state => ({
  todos: state.todos,
  input: state.input
})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  setInput: input => dispatch(setInput(input)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)
