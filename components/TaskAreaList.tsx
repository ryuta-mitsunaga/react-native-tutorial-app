import { FlatList } from 'react-native';
import TaskArea from './TaskArea';

type Props = {
  tasks: string[];

  // emit
  onDelete: (index: number) => void;
};

const TaskAreaList: React.FC<Props> = props => {
  return (
    <FlatList
      data={props.tasks}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TaskArea taskTitle={item} onDelete={() => props.onDelete(index)} />
      )}
    />
  );
};

export default TaskAreaList;
