import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout';
import {DashboardComponent} from './pages/dashboard/dashboard';
import {GpecDashboardComponent} from './pages/gpec/gpec-dashboard/gpec-dashboard';
import {EmployeeListComponent} from './pages/employees/employee-list/employee-list';
import {EmployeeForm, EmployeeFormComponent} from './pages/employees/employee-form/employee-form';
import {EmployeeDetailsComponent} from './pages/employees/employee-details/employee-details';
import {DepartmentListComponent} from './pages/departments/department-list/department-list';
import {DepartmentFormComponent} from './pages/departments/department-form/department-form';
import {SkillListComponent} from './pages/skills/skill-list/skill-list';
import {SkillFormComponent} from './pages/skills/skill-form/skill-form';
import {JobListComponent} from './pages/jobs/job-list/job-list';
import {JobFormComponent} from './pages/jobs/job-form/job-form';
import {ProfileComponent} from './pages/profile/profile';
import {SettingsComponent} from './pages/settings/settings';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout';
import {TrainingListComponent} from './pages/training/training-list/training-list';
import {TrainingFormComponent} from './pages/training/training-form/training-form';
import {RecommendationsComponent} from './pages/gpec/recommendations/recommendations';
import {CompetencyGapComponent} from './pages/gpec/competency-gap/competency-gap';
import {UserListComponent} from './pages/users/user-list/user-list';
import {UserFormComponent} from './pages/users/user-form/user-form';

// @ts-ignore
// @ts-ignore
export const routes: Routes = [

  // Layout
  {
    path: '',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout')
        .then(m => m.AdminLayoutComponent),
    children: [

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard')
            .then(m => m.DashboardComponent)
      },

      {
        path: 'gpec-dashboard',
        loadComponent: () =>
          import('./pages/gpec/gpec-dashboard/gpec-dashboard')
            .then(m => m.GpecDashboardComponent)
      },

      {
        path: 'employees',
        loadComponent: () =>
          import('./pages/employees/employee-list/employee-list')
            .then(m => m.EmployeeListComponent)
      },

      {
        path: 'employees/new',
        loadComponent: () =>
          import('./pages/employees/employee-form/employee-form')
            .then(m => m.EmployeeFormComponent)
      },

      {
        path: 'employees/:id',
        loadComponent: () =>
          import('./pages/employees/employee-details/employee-details')
            .then(m => m.EmployeeDetailsComponent)
      },

      {
        path: 'departments',
        loadComponent: () =>
          import('./pages/departments/department-list/department-list')
            .then(m => m.DepartmentListComponent)
      },

      {
        path: 'departments/new',
        loadComponent: () =>
          import('./pages/departments/department-form/department-form')
            .then(m => m.DepartmentFormComponent)
      },

      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/skills/skill-list/skill-list')
            .then(m => m.SkillListComponent)
      },

      {
        path: 'skills/new',
        loadComponent: () =>
          import('./pages/skills/skill-form/skill-form')
            .then(m => m.SkillFormComponent)
      },

      {
        path: 'jobs',
        loadComponent: () =>
          import('./pages/jobs/job-list/job-list')
            .then(m => m.JobListComponent)
      },

      {
        path: 'jobs/new',
        loadComponent: () =>
          import('./pages/jobs/job-form/job-form')
            .then(m => m.JobFormComponent)
      },

      {
        path: 'training',
        loadComponent: () =>
          import('./pages/training/training-list/training-list')
            .then(m => m.TrainingListComponent)
      },

      {
        path: 'training/new',
        loadComponent: () =>
          import('./pages/training/training-form/training-form')
            .then(m => m.TrainingFormComponent)
      },

      {
        path: 'recommendations',
        loadComponent: () =>
          import('./pages/gpec/recommendations/recommendations')
            .then(m => m.RecommendationsComponent)
      },

      {
        path: 'competency-gap',
        loadComponent: () =>
          import('./pages/gpec/competency-gap/competency-gap')
            .then(m => m.CompetencyGapComponent)
      },

      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/user-list/user-list')
            .then(m => m.UserListComponent)
      },

      {
        path: 'users/new',
        loadComponent: () =>
          import('./pages/users/user-form/user-form')
            .then(m => m.UserFormComponent)
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile')
            .then(m => m.ProfileComponent)
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings')
            .then(m => m.SettingsComponent)
      }

    ]
  },

  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout')
        .then(m => m.AuthLayoutComponent),
    children: [

      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login')
            .then(m => m.LoginComponent)
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
