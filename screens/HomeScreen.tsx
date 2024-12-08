import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import TaskAreaList from '../components/TaskAreaList';

const HomeScreen: React.FC = () => {
  const { tasks, addTask, deleteTask } = useTasks();
  const [task, setTask] = useState<string>('');

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
      <TaskAreaList tasks={tasks} onDelete={deleteTask} />
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
});

export default HomeScreen;
