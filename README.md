```
pnpm install

// 実行
pnpm run ios
```

# React Native チュートリアル: タスク管理アプリを作成

## **目標**

- React Nativeの基礎を理解し、TypeScriptを活用したモダンな開発手法を学ぶ。
- ステート管理や画面遷移をHooksで実現する。
- ネイティブAPI（カメラ、ローカルストレージなど）の基本を知る。

---

## **ステップ1: 開発環境をセットアップ**

### **1-1. 必要なツールのインストール**

- **Node.js（LTSバージョンを推奨）**
- **Expo CLI**（簡単に始めるためにExpoを使用）
  ```bash
  npm install -g expo-cli
  ```
- **React Native Debugger**（デバッグツール）

### **1-2. プロジェクト作成**

```bash
npx create-expo-app react-native-tutorial-app --template
```

---

## **ステップ2: 基本構造を理解する**

### **2-1. プロジェクト構造**

- `App.tsx`：エントリーポイント。
- `screens/`：各画面コンポーネントを配置。
- `components/`：再利用可能なUIコンポーネント。
- `hooks/`：カスタムHooksを配置。

---

## **ステップ3: タスク管理アプリの実装**

### **3-1. 初期画面の作成**

**目的**: Functional ComponentとTypeScriptの型定義を理解する。

**ファイル**: `screens/HomeScreen.tsx`

```tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

const HomeScreen: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  task: { fontSize: 18, marginTop: 10 },
});

export default HomeScreen;
```

---

### **3-2. ナビゲーションの追加**

**目的**: 画面遷移の基礎を学ぶ。

#### **パッケージインストール**

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
```

#### **ナビゲーション設定**

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditTask" component={EditTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

### **3-3. カスタムHooksの導入**

**目的**: ステート管理ロジックを分離する。

**ファイル**: `hooks/useTasks.ts`

```tsx
import { useState } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    if (task) {
      setTasks(prev => [...prev, task]);
    }
  };

  return { tasks, addTask };
};
```

**使用例**:

```tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useTasks } from '../hooks/useTasks';

const HomeScreen: React.FC = () => {
  const { tasks, addTask } = useTasks();
  const [task, setTask] = useState<string>('');

  return <View style={styles.container}>{/* 省略 */}</View>;
};
```

---

## **ステップ4: ローカルストレージの利用**

**目的**: タスクをデバイスに保存する。

#### **パッケージインストール**

```bash
npm install @react-native-async-storage/async-storage
```

#### **使用例**

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveTasks = async (tasks: string[]) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks.');
  }
};

const loadTasks = async () => {
  try {
    const savedTasks = await AsyncStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (e) {
    console.error('Failed to load tasks.');
    return [];
  }
};
```

---

## **ステップ5: スタイリング**

**目的**: `StyleSheet`を使ったレスポンシブデザインの実装。

---

## **次のステップ**

1. ReduxやContext APIを使ったグローバルステート管理。
2. ネイティブAPI（カメラ、位置情報など）の利用。
3. Expoを脱してReact Native CLIに移行する実践。

これでタスク管理アプリの基礎が完成です！
