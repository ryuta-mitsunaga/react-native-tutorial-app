import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import TaskAreaList from '../components/TaskAreaList';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const { tasks, addTask, deleteTask } = useTasks();
  const [task, setTask] = useState<string>('');
  const [date, setDate] = useState(new Date());

  const navigation = useNavigation();

  const onChangeDateTimePicker = (
    _: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const gotToEditTask = () => {
    navigation.navigate('EditTask');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <DateTimePicker
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={onChangeDateTimePicker}
        locale="ja-JP"
        style={{ marginBottom: 10 }}
      />
      )
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
      />
      <Button
        title="Add Task"
        onPress={() => addTask({ title: task, date: date })}
      />
      <TaskAreaList
        tasks={tasks}
        onDelete={deleteTask}
        onPress={gotToEditTask}
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
});

export default HomeScreen;
