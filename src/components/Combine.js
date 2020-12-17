import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native';



const Combine = (props) => {
    return(
        <View style= {styles.container}>
            <TextInput style= {styles.input} 
            testID="input" 
            placeholder={props.placeholder} 
            onChangeText={(value) => props.onChanging(value)}
            ref= {props.clean}
            />
            <TouchableOpacity style = {styles.buttonStyle} onPress={props.onSubmit} testID="button">
                <Text style= {styles.buttonText}>ADD TODO</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Combine;

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'grey',
        margin: 5,
        borderRadius: 8,
        padding:15
    },
    input: {
        width: Dimensions.get('screen').width*0.9,
        padding: 5,
        borderRadius: 8,
        backgroundColor: 'white',
        marginBottom: 10
    },
    buttonStyle: {
        backgroundColor: 'black',
        width: Dimensions.get('screen').width*0.9,
        padding: 10,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})