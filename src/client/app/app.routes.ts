import { Routes } from '@angular/router';
import { Route } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { gameRoomFirstRoutes } from './gameroom1/index';
import { gameRoomSecondRoutes } from './gameroom2/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...gameRoomFirstRoutes,
  ...gameRoomSecondRoutes
];
