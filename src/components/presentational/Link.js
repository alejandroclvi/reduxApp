/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Button
} from 'react-native'

const Link = ({ active , onTap, children }) => 
    <Button
        onPress={onTap}
        disabled={active}
        style={{ marginLeft: 4}}
        title={children}
    >
        { children }
    </Button>

export default Link
