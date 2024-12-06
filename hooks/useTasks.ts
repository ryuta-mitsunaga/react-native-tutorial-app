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

  return { tasks, addTask, addTasks };
};
