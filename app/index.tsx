import { useEffect, useState } from 'react';
import { Button, StyleSheet, Task, Text, TextInput, View } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import TaskAreaList from '../components/TaskAreaList';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { TasksContext } from '../context/TasksContext';
import { router } from 'expo-router';
import { TaskRequest, useTaskRepository } from '../hooks/useTaskRepository';

const index: React.FC = () => {
  const { tasks, addTask, deleteTask } = useTasks();
  const [task, setTask] = useState<string>('');
  const [date, setDate] = useState(new Date());

  const { getTasks, createTask } = useTaskRepository();

  const onChangeDateTimePicker = (
    _: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const gotToEditTask = (taskId: number) => {
    router.push(`./editTask/${taskId}`);
  };

  useEffect(() => {
    getTasks().then(res => {
      res.forEach(task => {
        addTask(task);
      });
    });
  }, []);

  const onClickAddTask = (task: TaskRequest) => {
    createTask(task).then(res => {
      addTask(res);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <View style={{ flexDirection: 'row' }}>
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDateTimePicker}
          locale="ja-JP"
        />

        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter a task"
        />
        <Button
          title="Add Task"
          onPress={() => onClickAddTask({ title: task, date })}
        />
      </View>
      <TasksContext.Provider value={tasks}>
        <TaskAreaList onDelete={deleteTask} onPress={gotToEditTask} />
      </TasksContext.Provider>
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
    flex: 2,
    marginLeft: 8,
  },
});

export default index;
