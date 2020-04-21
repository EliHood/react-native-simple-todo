/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [todo, setTodo] = useState('');
  const [markComplete, setMarkComplete] = useState(false);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    const ourTodo = {
      todo: todo,
    };
    setTodos([...todos, ourTodo]);
    setTodo('');
  };
  const deleleTodo = index => {
    console.log(index);
    const ourTodos = [...todos];
    ourTodos.splice(index, 1);
    setTodos(ourTodos);
  };

  console.log(todos);
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 40, padding: 30}}>
      <Text>Enter A Todo</Text>

      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          width: '100%',
          borderWidth: 1,
          marginTop: 20,
          marginBottom: 30,
        }}
        onChangeText={text => setTodo(text)}
        placeholder="Enter a Todo"
        value={todo}
      />
      <Button title="Submit Todo" onPress={addTodo} />
      <Fragment>
        <View style={{marginTop: 20, width: '100%'}}>
          {todos.length > 0 ? (
            <Fragment>
              {todos.map((item, index) => (
                <Fragment key={index}>
                  <Text
                    onPress={() => deleleTodo(index)}
                    style={{marginTop: 15}}>
                    {item.todo}
                  </Text>
                </Fragment>
              ))}
            </Fragment>
          ) : (
            <Text>No Data Yet</Text>
          )}
        </View>
      </Fragment>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
