import { ScrollView, StyleSheet } from 'react-native';
import HomeHeader from '../MainHeader';
import SectionArea from '../common/SectionArea';

const Home: React.FC = () => {
  // export type ContentCardProps = {
  //   id: number;
  //   title: string;
  //   imgUrl: string;
  //   // 開催期間
  //   periodStart: string;
  //   periodEnd?: string;
  // };

  const CONTENT_CARDS = [
    {
      id: 1,
      title: 'イベント1',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-01-01',
      periodEnd: '2021-01-03',
    },
    {
      id: 2,
      title: 'イベント2',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-02-01',
      periodEnd: '2021-02-03',
    },
    {
      id: 3,
      title: 'イベント3',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-03-01',
      periodEnd: '2021-03-03',
    },
    {
      id: 3,
      title: 'イベント3',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-03-01',
      periodEnd: '2021-03-03',
    },
    {
      id: 3,
      title: 'イベント3',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-03-01',
      periodEnd: '2021-03-03',
    },
  ];

  const displaySectionArea = () => {
    const propsList = [
      {
        title: 'まちとふれ合う',
        morePath: './event/1/content',
        contentCards: CONTENT_CARDS,
      },
      { title: '特典', morePath: '', contentCards: CONTENT_CARDS },
      { title: 'ふるさと納税', morePath: '', contentCards: CONTENT_CARDS },
      { title: 'お知らせ', morePath: '', contentCards: CONTENT_CARDS },
    ];

    return propsList.map(props => (
      <SectionArea
        title={props.title}
        morePath={props.morePath}
        contentCards={props.contentCards}
        key={`section-area-${props.title}`}
      />
    ));
  };

  return (
    <ScrollView>
      <HomeHeader point={1} key={'home-header'} />
      {displaySectionArea()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Home;
