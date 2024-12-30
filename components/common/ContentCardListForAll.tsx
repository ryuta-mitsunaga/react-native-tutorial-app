import { StyleSheet, View } from 'react-native';
import ContentCard, { ContentCardProps } from './ContentCard';

type Props = {
  contentCards: ContentCardProps[];
};

const ContentCardListForAll: React.FC<Props> = props => {
  const displayCards = () => {
    return props.contentCards.map((contentCard, index) => {
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
    flexWrap: 'wrap',
    padding: 4,
    rowGap: 8,
  },
  contentCard: {
    width: '25%',
  },
});

export default ContentCardListForAll;
