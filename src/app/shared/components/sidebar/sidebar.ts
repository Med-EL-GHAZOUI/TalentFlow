import { Component, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoleService, UserRole } from '../../../core/services/role';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  isCollapsed = false;
  currentRole: UserRole = 'ADMIN';

  constructor(public roleService: RoleService, public authService: AuthService) {
    effect(() => {
      this.currentRole = this.roleService.currentRole();
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
