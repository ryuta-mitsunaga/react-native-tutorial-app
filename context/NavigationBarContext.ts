import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createContext } from 'react';

export const NavigationBarContext = createContext<NativeStackNavigationOptions>(
  {}
);
