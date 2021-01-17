import React, {useState,useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import Header from './components/Header';
import Combine from './components/Combine'
import TodoCard from './components/TodoCard'


/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const textInput = React.useRef();
  const clearInput = () => (textInput.current.clear());

  const [condition, setCondition] = useState([]);
  const [text, setText] = useState("");
  const [counter,setCounter] = useState(0);

  const createTodo = (text) => {
    if(text) {
    const Element = {
      id: Math.random().toString(),
      todo: text,
      isDone: false
    }
    let newList = [Element, ...condition]
    setCondition(newList);
    setCounter(newList.length);
    }
    clearInput()
    // setText((e) => e.target.clear())
  }

  const countToDo = () =>{
    let newList = [...condition];
    const count = newList.filter(i => i.isDone ==false)
    setCounter(count.length)
    // console.log(count.length)
  }

  const disabledFunc = (todoId) => {
      let newList = [...condition];
      const todoIndex = newList.findIndex(i => i.id == todoId);
      newList[todoIndex].isDone = !newList[todoIndex].isDone
      setCondition(newList)
      countToDo()
      // Alert.alert("id", todoIndex)
  }

  const removedFunc = (todoId) => {
    let newList = [...condition];
    const removeIndex = newList.findIndex(i => i.id == todoId);
    newList.splice(removeIndex,1)
    setCondition(newList)
    setCounter(newList.length)
    // countToDo()
  }

  const renderData = ({item}) => {
    if(item.todo){
      return <TodoCard item={item} onDone={()=> disabledFunc(item.id)} onLong ={()=> removedFunc(item.id)}/>
    }
    
  }
 
  return (
    // ...
    <SafeAreaView style={{flex:1, backgroundColor: '#fafafa'}}>
      <View style={{flex:1}}>
        <Header condition= {condition} counter = {counter} />
        {/* <Text>{text}</Text> */}
      
        < FlatList
        testID="list"
        keyExtractor={(_,index) => index.toString()}
        data = {condition}
        renderItem = {renderData}
        ListEmptyComponent={() => <View style = {{alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:25}}>Nothing to do ...</Text></View>}
        />
        <Combine placeholder="Please enter your todo" 
        onChanging= {(text) => setText(text)} 
        onSubmit={() => createTodo(text)} 
        clean={textInput}
        />

      </View>
    </SafeAreaView>
  );
}

export default App;
