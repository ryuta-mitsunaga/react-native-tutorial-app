import { useState } from 'react';
import {
  FOOTER_ITEM_ENUM,
  FooterInfo,
  FooterInfoContext,
} from '../context/FooterInfoContext';

export const useFooterInfo = () => {
  const [footerInfo, setFooterInfo] = useState<FooterInfo>(FooterInfoContext);

  const selectMenu = new Map([
    [
      FOOTER_ITEM_ENUM.Home,
      () => setFooterInfo({ selectedMenu: FOOTER_ITEM_ENUM.Home }),
    ],
    [
      FOOTER_ITEM_ENUM.QRCode,
      () => setFooterInfo({ selectedMenu: FOOTER_ITEM_ENUM.QRCode }),
    ],
    [
      FOOTER_ITEM_ENUM.Activities,
      () => setFooterInfo({ selectedMenu: FOOTER_ITEM_ENUM.Activities }),
    ],
    [
      FOOTER_ITEM_ENUM.MembershipCard,
      () => setFooterInfo({ selectedMenu: FOOTER_ITEM_ENUM.MembershipCard }),
    ],
  ]);

  return { footerInfo, selectMenu };
};
