import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {
  taskTitle: string;

  // emit
  onDelete: () => void;
};

const TaskArea: React.FC<Props> = props => {
  return (
    <View style={styles.taskArea}>
      <View style={styles.task}>
        <Text>{props.taskTitle}</Text>
      </View>
      <View style={styles.deleteButton}>
        <Button title="Delete" onPress={props.onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskArea: {
    flexDirection: 'row',
    minHeight: 100,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: { justifyContent: 'center' }, // cssのflexboxとは違い、子要素側にjustifyContent、alignItemsを指定する
  task: { fontSize: 18, flex: 1, justifyContent: 'center' },
});

export default TaskArea;
