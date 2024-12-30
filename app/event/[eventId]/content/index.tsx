import { StyleSheet, View } from 'react-native';
import ContentCardListForAll from '../../../../components/common/ContentCardListForAll';

const index: React.FC = () => {
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
      id: 4,
      title: 'イベント3',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-03-01',
      periodEnd: '2021-03-03',
    },
    {
      id: 5,
      title: 'イベント3',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-03-01',
      periodEnd: '2021-03-03',
    },
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
      id: 4,
      title: 'イベント3',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-03-01',
      periodEnd: '2021-03-03',
    },
    {
      id: 5,
      title: 'イベント3',
      imgUrl:
        'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE',
      periodStart: '2021-03-01',
      periodEnd: '2021-03-03',
    },
  ];

  return (
    <View>
      <ContentCardListForAll contentCards={CONTENT_CARDS} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default index;
