// app/_layout.tsx
import { Stack } from 'expo-router';
import { NavigationBarContext } from '../context/NavigationBarContext';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
  const dispatches = {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    title: 'ふるさとアプリ',
  };

  return (
    <NavigationBarContext.Provider value={dispatches}>
      {/* <View style={styles.container}> */}
      <Stack screenOptions={dispatches} />
      {/* </View> */}
    </NavigationBarContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});
