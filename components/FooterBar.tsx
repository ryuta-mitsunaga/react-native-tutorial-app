import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFooterInfo } from '../hooks/useFooterInfo';
import {
  FOOTER_ITEM_ENUM,
  FooterInfoContext,
} from '../context/FooterInfoContext';
import { useContext } from 'react';

const FooterBar: React.FC<{
  onSelectMenu: (menu: FOOTER_ITEM_ENUM) => void;
}> = props => {
  const footerInfoCtx = useContext(FooterInfoContext);

  const onPressMenu = (menu: FOOTER_ITEM_ENUM) => {
    // const selectMenuFunc = selectMenu.get(menu);
    // if (selectMenuFunc) selectMenuFunc();

    props.onSelectMenu(menu);
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onPressMenu(FOOTER_ITEM_ENUM.Home)}
      >
        <Text>ホーム</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onPressMenu(FOOTER_ITEM_ENUM.QRCode)}
      >
        <Text>二次元コード</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onPressMenu(FOOTER_ITEM_ENUM.Activities)}
      >
        <Text>まちの活動</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onPressMenu(FOOTER_ITEM_ENUM.MembershipCard)}
      >
        <Text>会員証</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  footerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 60,
  },
});

export default FooterBar;
