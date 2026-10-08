import { Injectable } from '@angular/core';

export type Language = 'th' | 'en';

export type TranslationKey =
  | 'navigation.dashboard'
  | 'navigation.users'
  | 'navigation.products'
  | 'navigation.inventory'
  | 'navigation.sales'
  | 'navigation.title'
  | 'sidebar.workspace'
  | 'sidebar.ready'
  | 'sidebar.administrator'
  | 'sidebar.expand'
  | 'sidebar.collapse'
  | 'topbar.overview'
  | 'topbar.search'
  | 'topbar.notifications'
  | 'topbar.accountMenu'
  | 'topbar.account'
  | 'topbar.settings'
  | 'topbar.logout'
  | 'topbar.role'
  | 'topbar.online'
  | 'language.switchToEnglish'
  | 'language.switchToThai'
  | 'theme.switchToDark'
  | 'theme.switchToLight'
  | 'page.eyebrow'
  | 'page.title'
  | 'page.description'
  | 'page.exampleAction'
  | 'card.status'
  | 'card.loading'
  | 'card.empty'
  | 'status.active'
  | 'loading.sample'
  | 'empty.title'
  | 'empty.description'
  | 'empty.action'
  | 'footer.version'
  | 'alert.accountTitle'
  | 'alert.accountText'
  | 'alert.settingsTitle'
  | 'alert.settingsText'
  | 'alert.logoutTitle'
  | 'alert.logoutText'
  | 'alert.confirm'
  | 'alert.cancel';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  current: Language = 'th';

  private readonly translations: Record<
    Language,
    Record<TranslationKey, string>
  > = {
    th: {
      'navigation.dashboard': 'แดชบอร์ด',
      'navigation.users': 'ผู้ใช้งาน',
      'navigation.products': 'สินค้า',
      'navigation.inventory': 'คลังสินค้า',
      'navigation.sales': 'การขาย',
      'navigation.title': 'เมนูหลัก',
      'sidebar.workspace': 'สภาพแวดล้อมจำลอง',
      'sidebar.ready': 'พร้อมใช้งาน',
      'sidebar.administrator': 'ผู้ดูแลระบบ',
      'sidebar.expand': 'ขยายเมนู',
      'sidebar.collapse': 'หุบเมนู',
      'topbar.overview': 'ภาพรวมระบบ',
      'topbar.search': 'ค้นหา',
      'topbar.notifications': 'การแจ้งเตือน',
      'topbar.accountMenu': 'เปิดเมนูบัญชีผู้ใช้',
      'topbar.account': 'บัญชีผู้ใช้',
      'topbar.settings': 'ตั้งค่าระบบ',
      'topbar.logout': 'ออกจากระบบ',
      'topbar.role': 'ผู้ดูแลระบบ',
      'topbar.online': 'ออนไลน์',
      'language.switchToEnglish': 'เปลี่ยนเป็นภาษาอังกฤษ',
      'language.switchToThai': 'เปลี่ยนเป็นภาษาไทย',
      'theme.switchToDark': 'เปิดโหมดมืด',
      'theme.switchToLight': 'เปิดโหมดสว่าง',
      'page.eyebrow': 'SHELFLOW / APP SHELL',
      'page.title': 'App Shell พร้อมใช้งาน',
      'page.description':
        'โครงหน้าหลักประกอบด้วย Sidebar, Topbar และพื้นที่เนื้อหา',
      'page.exampleAction': 'ตัวอย่างการทำงาน',
      'card.status': 'สถานะ',
      'card.loading': 'กำลังโหลด',
      'card.empty': 'ไม่มีข้อมูล',
      'status.active': 'ใช้งานอยู่',
      'loading.sample': 'กำลังโหลดตัวอย่าง...',
      'empty.title': 'ยังไม่มีรายการ',
      'empty.description':
        'พื้นที่นี้พร้อมสำหรับ Feature ที่จะพัฒนาใน Phase ถัดไป',
      'empty.action': 'สร้างรายการ',
      'footer.version': 'เวอร์ชัน 0.1.0',
      'alert.accountTitle': 'บัญชีผู้ใช้',
      'alert.accountText':
        'ส่วนจัดการข้อมูลบัญชีผู้ใช้จะพร้อมใช้งานในขั้นตอนถัดไป',
      'alert.settingsTitle': 'ตั้งค่าระบบ',
      'alert.settingsText': 'ส่วนตั้งค่าระบบจะพร้อมใช้งานในขั้นตอนถัดไป',
      'alert.logoutTitle': 'ออกจากระบบ?',
      'alert.logoutText': 'คุณต้องการออกจากระบบ ShelfFlow หรือไม่',
      'alert.confirm': 'รับทราบ',
      'alert.cancel': 'ยกเลิก',
    },
    en: {
      'navigation.dashboard': 'Dashboard',
      'navigation.users': 'Users',
      'navigation.products': 'Products',
      'navigation.inventory': 'Inventory',
      'navigation.sales': 'Sales',
      'navigation.title': 'Main menu',
      'sidebar.workspace': 'Demo workspace',
      'sidebar.ready': 'Ready',
      'sidebar.administrator': 'Administrator',
      'sidebar.expand': 'Expand menu',
      'sidebar.collapse': 'Collapse menu',
      'topbar.overview': 'Overview',
      'topbar.search': 'Search',
      'topbar.notifications': 'Notifications',
      'topbar.accountMenu': 'Open account menu',
      'topbar.account': 'User account',
      'topbar.settings': 'System settings',
      'topbar.logout': 'Sign out',
      'topbar.role': 'Administrator',
      'topbar.online': 'Online',
      'language.switchToEnglish': 'Switch to English',
      'language.switchToThai': 'เปลี่ยนเป็นภาษาไทย',
      'theme.switchToDark': 'Switch to dark mode',
      'theme.switchToLight': 'Switch to light mode',
      'page.eyebrow': 'SHELFLOW / APP SHELL',
      'page.title': 'App Shell is ready',
      'page.description':
        'The main layout includes a Sidebar, Topbar and content area',
      'page.exampleAction': 'Try interaction',
      'card.status': 'Status',
      'card.loading': 'Loading',
      'card.empty': 'Empty state',
      'status.active': 'Active',
      'loading.sample': 'Loading sample...',
      'empty.title': 'No items yet',
      'empty.description': 'This area is ready for the next feature phase',
      'empty.action': 'Create item',
      'footer.version': 'Version 0.1.0',
      'alert.accountTitle': 'User account',
      'alert.accountText':
        'Account management will be available in the next phase',
      'alert.settingsTitle': 'System settings',
      'alert.settingsText':
        'System settings will be available in the next phase',
      'alert.logoutTitle': 'Sign out?',
      'alert.logoutText': 'Do you want to sign out of ShelfFlow?',
      'alert.confirm': 'Got it',
      'alert.cancel': 'Cancel',
    },
  };

  toggle(): void {
    this.current = this.current === 'th' ? 'en' : 'th';
  }

  t(key: TranslationKey): string {
    return this.translations[this.current][key];
  }
}
