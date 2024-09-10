import { lazy } from 'react';
import authRoute from './authRoute';
import type { Routes } from '@/@types/routes';
import BuildingsModifyModal from '@/sections/buildings/modify';
import RoomsModifyModal from '@/sections/rooms/modify';
import RoomModifyModal from '@/sections/schedules/modify';

export const publicRoutes: Routes = [...authRoute];

export const protectedRoutes = [
  {
    key: 'buildings',
    path: '/buildings',
    component: lazy(() => import('@/sections/buildings/list')),
    authority: [],
    children: [
      {
        path: 'add',
        key: 'add',
        component: BuildingsModifyModal,
        authority: [],
      },
      {
        path: ':id/edit',
        key: 'edit',
        component: BuildingsModifyModal,
        authority: [],
      },
    ],
  },
  {
    key: 'rooms',
    path: '/rooms',
    component: lazy(() => import('@/sections/rooms/list')),
    authority: [],
    children: [
      {
        path: 'add',
        key: 'add',
        component: RoomsModifyModal,
        authority: [],
      },
      {
        path: ':id/edit',
        key: 'edit',
        component: RoomsModifyModal,
        authority: [],
      },
    ],
  },
  {
    key: 'schedules',
    path: '/schedules',
    component: lazy(() => import('@/sections/schedules/list')),
    authority: [],
    children: [
      {
        path: 'add',
        key: 'add',
        component: RoomModifyModal,
        authority: [],
      },
      {
        path: ':id/edit',
        key: 'edit',
        component: RoomModifyModal,
        authority: [],
      },
    ],
  },
];
