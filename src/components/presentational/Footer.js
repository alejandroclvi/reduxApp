/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'
import FilterLink from '../container/FilterLink'

const Footer = ({ filters }) => 
    <View style={styles.container} >
        {
            filters.map( filter => 
                <FilterLink key={filter.constant} filter={filter.constant}>
                    { filter.name }
                </FilterLink>
            )
        }
    </View>


const styles = StyleSheet.create({
    container: {
        height:50,
        width:'80%',
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
})    

export default Footer
