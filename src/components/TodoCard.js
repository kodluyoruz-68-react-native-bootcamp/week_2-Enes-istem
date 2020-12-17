import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';


const TodoCard = (props) => {

    return(
        <TouchableOpacity style = {props.item.isDone? styles.containerDone: styles.container} 
        onPress={props.onDone} 
        onLongPress = {props.onLong}
        >   
           <Text style = {props.item.isDone? styles.cardDoneText: styles.cardText}>{props.item.todo}</Text>
        </TouchableOpacity>
    )
}

export default TodoCard;

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: 10,
        margin: 5,
        borderRadius:8,
        width: Dimensions.get('screen').width*0.8,
        alignSelf: 'center'
    },
    containerDone: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        borderRadius:8,
        width: Dimensions.get('screen').width*0.8,
        alignSelf: 'center'
    },
    cardText: {
        color: 'white',
        textAlign: 'center'
    },
    cardDoneText: {
        color: 'red',
        textAlign: 'center',
        textDecorationLine: 'line-through'
    }
})