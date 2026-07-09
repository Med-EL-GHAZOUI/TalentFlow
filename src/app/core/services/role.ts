import { Injectable, signal } from '@angular/core';

export type UserRole = 'ADMIN' | 'RH' | 'MANAGER' | 'EMPLOYEE';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  private currentRoleSignal = signal<UserRole>('ADMIN');

  constructor() {
    const savedRole = localStorage.getItem('gpec_role') as UserRole;
    if (savedRole && ['ADMIN', 'RH', 'MANAGER', 'EMPLOYEE'].includes(savedRole)) {
      this.currentRoleSignal.set(savedRole);
    }
  }

  get currentRole() {
    return this.currentRoleSignal;
  }

  setRole(role: UserRole) {
    this.currentRoleSignal.set(role);
    localStorage.setItem('gpec_role', role);
  }

}
