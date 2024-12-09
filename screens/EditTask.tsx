import { StyleSheet, Text } from 'react-native';

const HomeScreen: React.FC = () => {
  return <Text>タスク編集画面</Text>;
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
