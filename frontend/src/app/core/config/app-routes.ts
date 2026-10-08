import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { TranslationKey } from '../services/language.service';
import { DashboardPageComponent } from '../../pages/SCR-DASH-001/dashboard-page/dashboard-page.component';
import { ScreenPlaceholderComponent } from '../../pages/screen-placeholder/screen-placeholder.component';

export interface ScreenRouteDefinition {
  path: string;
  screenCode: string;
  labelKey?: TranslationKey;
  title?: string;
  component: Type<unknown>;
}

export const screenRouteDefinitions: ScreenRouteDefinition[] = [
  {
    path: 'dashboard',
    screenCode: 'SCR-DASH-001',
    labelKey: 'navigation.dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'users',
    screenCode: 'SCR-USER-001',
    labelKey: 'navigation.users',
    component: ScreenPlaceholderComponent,
  },
  {
    path: 'products',
    screenCode: 'SCR-PROD-001',
    labelKey: 'navigation.products',
    component: ScreenPlaceholderComponent,
  },
  {
    path: 'inventory',
    screenCode: 'SCR-INV-001',
    labelKey: 'navigation.inventory',
    component: ScreenPlaceholderComponent,
  },
  {
    path: 'sales',
    screenCode: 'SCR-SALE-001',
    labelKey: 'navigation.sales',
    component: ScreenPlaceholderComponent,
  },
  {
    path: 'roles',
    screenCode: 'SCR-ROLE-001',
    title: 'จัดการสิทธิ์การใช้งาน',
    component: ScreenPlaceholderComponent,
  },
  {
    path: 'payments',
    screenCode: 'SCR-PAY-001',
    title: 'การชำระเงิน',
    component: ScreenPlaceholderComponent,
  },
  {
    path: 'audit',
    screenCode: 'SCR-AUDIT-001',
    title: 'ประวัติการตรวจสอบ',
    component: ScreenPlaceholderComponent,
  },
  {
    path: 'login',
    screenCode: 'SCR-AUTH-001',
    title: 'เข้าสู่ระบบ',
    component: ScreenPlaceholderComponent,
  },
];

export const applicationRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  ...screenRouteDefinitions.map((screenRoute) => ({
    path: screenRoute.path,
    component: screenRoute.component,
    data: {
      screenCode: screenRoute.screenCode,
      labelKey: screenRoute.labelKey,
      title: screenRoute.title,
    },
  })),
  { path: '**', redirectTo: 'dashboard' },
];
