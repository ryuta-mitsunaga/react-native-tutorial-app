import { FlatList } from 'react-native';
import TaskArea from './TaskArea';
import { TasksContext } from '../context/TasksContext';
import { useContext } from 'react';

type Props = {
  // emit
  onDelete: (index: number) => void;
  onPress: (index: number) => void;
};

const TaskAreaList: React.FC<Props> = props => {
  const tasks = useContext(TasksContext);

  return (
    <FlatList
      data={tasks}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <TaskArea
          task={item}
          onDelete={() => props.onDelete(item.id)}
          onPress={() => props.onPress(item.id)}
        />
      )}
    />
  );
};

export default TaskAreaList;
