import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../hooks/useTasks';
import { useMemo } from 'react';

type Props = {
  task: Task;

  // emit
  onDelete: () => void;
  onPress?: () => void;
};

const TaskArea: React.FC<Props> = props => {
  // computedみたいなやつ　キャッシュされる
  const displayTask = useMemo(() => {
    const date = props.task.date;

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }, [props.task]);

  // 本日から何日後かを表示
  const displayUntilDay = useMemo(() => {
    const today = new Date();
    const until = props.task.date;
    const diff = until.getTime() - today.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));

    return day;
  }, [props.task]);

  const untilDayStyle = useMemo(() => {
    return {
      color: displayUntilDay > 0 ? 'black' : 'red',
    };
  }, [displayUntilDay]);

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.taskArea}>
        <View style={styles.task}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={untilDayStyle}>残り{displayUntilDay}日</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingRight: 8 }}>{props.task.title}</Text>
              <Text style={{ color: 'gray' }}>({displayTask})</Text>
            </View>
          </View>
        </View>
        <View style={styles.deleteButton}>
          <Button title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </TouchableOpacity>
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
  task: {
    flexDirection: 'row',
    fontSize: 18,
    flex: 1,
  },
});

export default TaskArea;
