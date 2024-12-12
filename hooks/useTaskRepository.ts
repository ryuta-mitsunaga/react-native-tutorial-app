import { Task } from '../context/TasksContext';
// import { useBaseRepository } from './useBaseRepository';

export type TaskRequest = Omit<Task, 'id'>;

export const useTaskRepository = () => {
  // const axiosInstance = useBaseRepository();

  const getTasks = async (): Promise<Task[]> => {
    // const response = await axiosInstance.get('/tasks');

    return [
      { id: 1, title: 'Task 1', date: new Date() },
      { id: 2, title: 'Task 2', date: new Date() },
    ];
  };

  const createTask = async (task: TaskRequest): Promise<Task> => {
    // const response = await axiosInstance.post('/tasks', task);

    return {
      ...task,
      id: Math.floor(Math.random() * 100),
    };
  };

  return {
    getTasks,
    createTask,
  };
};
