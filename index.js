import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import App from './src/components/presentational/App'
import React, { Component } from 'react'

const _App = () => 
<Provider store={store}>
  <App />
</Provider>

AppRegistry.registerComponent('reduxApp', () => _App )
