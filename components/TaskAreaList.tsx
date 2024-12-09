import { FlatList } from 'react-native';
import TaskArea from './TaskArea';
import { Task } from '../hooks/useTasks';

type Props = {
  tasks: Task[];

  // emit
  onDelete: (index: number) => void;
  onPress: (index: number) => void;
};

const TaskAreaList: React.FC<Props> = props => {
  return (
    <FlatList
      data={props.tasks}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TaskArea
          task={item}
          onDelete={() => props.onDelete(index)}
          onPress={() => props.onPress(index)}
        />
      )}
    />
  );
};

export default TaskAreaList;
