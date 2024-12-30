import { StyleSheet, View } from 'react-native';
import ContentCard, { ContentCardProps } from './ContentCard';

type Props = {
  contentCards: ContentCardProps[];
};

// 1行あたりのitem数を指定
const COLUMNS = 4;

const ContentCardList: React.FC<Props> = props => {
  const displayCards = () => {
    return props.contentCards.map((contentCard, index) => {
      if (index >= COLUMNS) return;

      return (
        <View key={index} style={styles.contentCard}>
          <ContentCard contentCard={contentCard} />
        </View>
      );
    });
  };

  return <View style={styles.container}>{displayCards()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
  },
  contentCard: {
    width: '25%',
  },
});

export default ContentCardList;
