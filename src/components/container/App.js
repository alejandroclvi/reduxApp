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
import VisibleTodoList from './VisibleTodoList'
import AddTodoForm from '../presentational/AddTodoForm';
import Footer from '../presentational/Footer'

const FILTERS = [{name:'Active', constant:'SHOW_ACTIVE'},{name:'Completed', constant:'SHOW_COMPLETED'}, {name:'All', constant:'SHOW_ALL'}]

export default App = ({todos, input, setInput, toggleTodo, addTodo }) => (
  <View style={styles.container}>
      <VisibleTodoList />
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