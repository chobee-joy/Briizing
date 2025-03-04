import * as TITLE from './constant.title';

interface GnbMenuItem {
  title: string;
  path: string;
}

export const GNB_MENU: GnbMenuItem[] = [
  { title: TITLE.RANK, path: "/rank"},
  { title: TITLE.GUIDE, path: "/guide" },
  { title: TITLE.COMMUNITY, path: "/community" },
];