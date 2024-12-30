import { StyleSheet, View } from 'react-native';
import { ContentCardProps } from './ContentCard';
import ContentCardList from './ContentCardList';
import SectionBar from './SectionBar';

type Props = {
  title: string;
  morePath: string;
  contentCards: ContentCardProps[];
};

const SectionArea: React.FC<Props> = props => {
  return (
    <View>
      <View style={styles.sectionBar}>
        <SectionBar title={props.title} morePath={props.morePath} />
      </View>

      <ContentCardList contentCards={props.contentCards} />
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
  sectionBar: {
    marginTop: 2,
    marginBottom: 2,
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

export default SectionArea;
