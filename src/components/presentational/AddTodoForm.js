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
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import {  connect } from 'react-redux'
import { addTodo, setInput  } from '../../redux/actions'

const AddTodoButton = ({ addTodo, input }) => 
    <TouchableOpacity  style={styles.addTodoButtonContainer} onPress={() => addTodo(input)}>
            <Text style={styles.addTodoSymbol}>+</Text> 
    </TouchableOpacity>

const Input = ({ input, setInput }) => 
    <TextInput 
        style={{width:'90%', height: 40, borderColor: 'gray', borderRadius:5, borderWidth: 1}}
        onChangeText={ (text) => setInput(text)}
        value={input}
        keyboardAppearance='dark'
    />


const AddTodoForm = ({ addTodo, setInput, input }) =>  
    <KeyboardAvoidingView style={styles.avoidingKeyboardView} behavior="padding" enabled>
        <View style={styles.addTodoContainer}>
            <Input input={input} setInput={setInput} />
            <AddTodoButton addTodo={addTodo} input={input} />
        </View>
    </KeyboardAvoidingView>

const styles = StyleSheet.create({
    addTodoButtonContainer: {
        justifyContent:'center',
        alignItems:'center',
        height:35,
        width:35,
        borderRadius:17.5,
        margin:5,
        backgroundColor:'#1e90ff'
    },
    addTodoContainer: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingBottom:10
    },
    addTodoSymbol: {
        fontSize:22,
        color:'white',
        fontWeight:'bold'
    },
    avoidingKeyboardView: {
        paddingBottom: 50,
    }
})

const mapStateToProps = state => ({
    input: state.input
})
  
const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
    setInput: input => dispatch(setInput(input)),
})

export default connect(
mapStateToProps, 
mapDispatchToProps
)(AddTodoForm)