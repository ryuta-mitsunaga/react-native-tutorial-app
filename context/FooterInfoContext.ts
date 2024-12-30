import { createContext } from 'react';

export enum FOOTER_ITEM_ENUM {
  Home = 0,
  QRCode = 1,
  Activities = 2,
  MembershipCard = 3,
}

export const FOOTER_ITEM = new Map([
  [FOOTER_ITEM_ENUM.Home, { key: FOOTER_ITEM_ENUM.Home, label: 'ホーム' }],
  [
    FOOTER_ITEM_ENUM.QRCode,
    { key: FOOTER_ITEM_ENUM.QRCode, label: 'QRコード' },
  ],
  [
    FOOTER_ITEM_ENUM.Activities,
    { key: FOOTER_ITEM_ENUM.Activities, label: 'アクティビティ' },
  ],
  [
    FOOTER_ITEM_ENUM.MembershipCard,
    { key: FOOTER_ITEM_ENUM.MembershipCard, label: '会員証' },
  ],
]);

export type FooterInfo = {
  selectedMenu: FOOTER_ITEM_ENUM;
};

export const FooterInfoContext = createContext<FooterInfo>({
  selectedMenu: FOOTER_ITEM_ENUM.Home,
});
