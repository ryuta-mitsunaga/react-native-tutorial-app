import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useTasks } from '../hooks/useTasks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen: React.FC = () => {
  const { tasks, addTask, addTasks } = useTasks();
  const [task, setTask] = useState<string>('');

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error(error);
    }
  };

  const loadTasks = async () => {
    try {
      const tasks = await AsyncStorage.getItem('tasks');
      console.log(tasks);
      if (tasks) {
        addTasks(JSON.parse(tasks) as string[]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // taskが変更されたらsaveTasksを呼び出す
  useEffect(() => {
    saveTasks();
  }, [tasks]);

  // コンポーネントがマウントされたらloadTasksを呼び出す
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
      />
      <Button title="Add Task" onPress={() => addTask(task)} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  task: { fontSize: 18, marginTop: 10 },
});

export default HomeScreen;
