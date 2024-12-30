import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  morePath: string;
};

const SectionBar: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Link href={props.morePath} style={styles.moreLink}>
        もっと見る
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E168A1',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreLink: {
    color: 'white',
    paddingTop: 8,
    textDecorationLine: 'underline',
  },
});

export default SectionBar;
