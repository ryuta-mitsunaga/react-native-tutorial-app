import { useState } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    if (task) {
      setTasks(prev => [...prev, task]);
    }
  };

  const addTasks = (tasks: string[]) => {
    setTasks(prev => [...prev, ...tasks]);
  };

  const deleteTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return { tasks, addTask, addTasks, deleteTask };
};
