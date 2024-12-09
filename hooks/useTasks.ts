import { useState } from 'react';

export type Task = {
  title: string;
  date: Date;
};

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

  const deleteTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return { tasks, addTask, addTasks, deleteTask };
};
