/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

const Todo = ({ todo , onTap, completed, id  }) => (
    <TouchableOpacity  onPress={() => onTap(id)}>
        <Text>
         • <Text  style={{fontSize:18, color:(completed)?'green':'red'}}>{ todo }</Text>
        </Text>
    </TouchableOpacity>
)

export default Todo