import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "react-native-elements";

export default App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (todoText.trim()) {
      setTodoList([...todoList, { id: Date.now(), text: todoText }]);
      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "Todo App",
          style: { color: "#fff", fontSize: 20 },
        }}
        containerStyle={{ backgroundColor: "#007AFF", margin: 10 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
          placeholder="Enter todo item"
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {todoList.map((todo) => (
          <TouchableOpacity key={todo.id} onPress={() => deleteTodo(todo.id)}>
            <Text style={styles.listItem}>{todo.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
});
