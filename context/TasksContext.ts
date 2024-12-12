import { createContext } from 'react';

export type Task = {
  id: number;
  title: string;
  date: Date;
};

export const TasksContext = createContext<Task[]>([]);
