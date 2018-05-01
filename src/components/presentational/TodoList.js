/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, onTodoTap }) => (
    <FlatList  
        data={todos}
        renderItem={ ({item}) => <Todo todo={item.text} completed={item.completed} onTap={onTodoTap} id={item.id}/> }
        keyExtractor={ (item) => item.id.toString() }
    />
)

export default TodoList