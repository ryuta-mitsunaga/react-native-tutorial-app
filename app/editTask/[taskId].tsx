import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditTask() {
  const { taskId } = useLocalSearchParams();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());

  const onChangeDateTimePicker = (
    _: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.label}>
          <Text>タスク名</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="タスク名"
        />
      </View>
      <View>
        <View style={styles.inputContainer}>
          <View style={styles.label}>
            <Text>日付</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeDateTimePicker}
              locale="ja-JP"
            />
          </View>
        </View>
      </View>
      <View>
        <Button title="Save" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  label: {
    width: 100,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    flex: 1,
  },
});
