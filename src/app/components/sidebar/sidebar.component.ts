import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
        {
          icon: 'home',
          label: 'Trang Chủ',
          href: '/',
        },
        {
          icon: 'school',
          label: 'Giáo Viên',
          href: '/list/teachers',
        },
        {
          icon: 'people',
          label: 'Học Sinh',
          href: '/list/students',
        },
        {
          icon: 'family_restroom',
          label: 'Phụ Huynh',
          href: '/list/students',
        },
        {
          icon: 'bookmarks',
          label: 'Khóa Học',
          href: '/list/teachers',
        },
        {
          icon: 'code',
          label: 'Code',
          href: '/list/students',
        },
        {
          icon: 'paid',
          label: 'Giao Dịch',
          href: '/list/students',
        },
        {
          icon: 'event',
          label: 'Sự Kiện',
          href: '/list/students',
        },
        {
          icon: 'notifications',
          label: 'Thông Báo',
          href: '/list/students',
        },
        {
          icon: 'question_answer',
          label: 'Tư vấn',
          href: '/list/students',
        },

        {
          icon: 'manage_accounts',
          label: 'Profile',
          href: '/profile',
        },
        {
          icon: 'settings',
          label: 'Cài Đặt',
          href: '/settings',
        },
  ];
  isOpen = true; 

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
