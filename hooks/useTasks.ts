import { useState } from 'react';
import { Task } from '../context/TasksContext';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    if (task) {
      setTasks(prev => [...prev, task]);
    }
  };

  const addTasks = (tasks: Task[]) => {
    setTasks(prev => [...prev, ...tasks]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(prev => prev.filter((_, i) => i !== taskId));
  };

  return { tasks, addTask, addTasks, deleteTask };
};
