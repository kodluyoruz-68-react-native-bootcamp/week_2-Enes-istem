import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';


const Header = ({condition, counter}) => {

    return(
        <View style = {styles.container}>
            <Text style = {styles.todoStyle}>TODO</Text>
            <Text style = {styles.counterStyle}>{counter}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    todoStyle: {
        fontSize:35,
        fontWeight: 'bold',
        color: '#8e0000'
    },
    counterStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    }
})