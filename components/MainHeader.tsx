import { StyleSheet, Text, View } from 'react-native';

type Props = {
  point: number;
};

const HomeHeader: React.FC<Props> = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'flex-end' }}>
          <View style={styles.pointArea}>
            <Text style={styles.point}>{props.point}</Text>
            <Text style={styles.pointName}>{`ふるさと\nポイント`}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <View style={styles.icon}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#D1B6C6',
    height: 200,
    alignItems: 'center',
    gap: 20,
  },
  pointArea: {
    backgroundColor: '#DF7EB7',
    width: 150,
    height: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  point: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  pointName: {
    color: 'white',
  },
  icon: {
    width: 170,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default HomeHeader;
