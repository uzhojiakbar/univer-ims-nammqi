import type { NavigationTree } from '@/@types/navigation';
import { IconDoor, IconList, IconBuildingCommunity } from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'buildings',
    path: '/buildings',
    title: 'Buildings',
    translateKey: 'buildings',
    icon: IconBuildingCommunity,
    authority: [],
    subMenu: [],
  },
  {
    key: 'rooms',
    path: '/rooms',
    title: 'Rooms',
    translateKey: 'rooms',
    icon: IconDoor,
    authority: [],
    subMenu: [],
  },
  {
    key: 'schedules',
    path: '/schedules',
    title: 'Schedules',
    translateKey: 'schedules',
    icon: IconList,
    authority: [],
    subMenu: [],
  },
];

export default navigationConfig;
