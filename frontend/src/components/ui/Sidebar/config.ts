import { IconType } from 'react-icons';
import { IoDocumentsOutline, IoHomeOutline, IoTrashOutline } from 'react-icons/io5';

export const sidebar: SidebarItemType[] = [
  {
    name: 'Главная',
    icon: IoHomeOutline,
    path: '/',
  },
  {
    name: 'Проекты',
    icon: IoDocumentsOutline,
    path: '/projects',
  },
  {
    name: 'Корзина',
    icon: IoTrashOutline,
    path: '/trash',
  },
];

export type SidebarItemType = {
  name: string;
  icon: IconType;
  path: string;
}