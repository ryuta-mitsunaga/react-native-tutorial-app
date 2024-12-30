import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  FOOTER_ITEM_ENUM,
  FooterInfoContext,
} from '../context/FooterInfoContext';
import Activities from './main-contents/Activities';
import Home from './main-contents/Home';
import MembershipCard from './main-contents/MembershipCard';
import QRCode from './main-contents/QRCode';

const MainContent: React.FC = () => {
  const footerInfoCtx = useContext(FooterInfoContext);

  // コンポーネントをマッピング
  const componentMap: Record<string, JSX.Element> = {
    [FOOTER_ITEM_ENUM.Home]: <Home />,
    [FOOTER_ITEM_ENUM.QRCode]: <QRCode />,
    [FOOTER_ITEM_ENUM.Activities]: <Activities />,
    [FOOTER_ITEM_ENUM.MembershipCard]: <MembershipCard />,
  };

  // 選択されたコンポーネントを取得
  const selectedComponent = componentMap[footerInfoCtx.selectedMenu];

  return <View>{selectedComponent}</View>;
};

const styles = StyleSheet.create({});

export default MainContent;
