import { Image, StyleSheet, Text, View } from 'react-native';

export type ContentCardProps = {
  id: number;
  title: string;
  imgUrl: string;
  // 開催期間
  periodStart: string;
  periodEnd?: string;
};

type Props = {
  contentCard: ContentCardProps;
};

const ContentCard: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text>{props.contentCard.title}</Text>
      <Text>{props.contentCard.periodStart}</Text>
      <Text>{props.contentCard.periodEnd && ~props.contentCard.periodEnd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreLink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default ContentCard;
