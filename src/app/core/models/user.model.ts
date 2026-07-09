export interface User {

  id: number;

  firstName: string;

  lastName: string;

  email: string;

  role: Role;

  enabled: boolean;

  createdAt: Date;

}

export enum Role {

  ADMIN = 'ADMIN',

  HR = 'HR',

  MANAGER = 'MANAGER',

  EMPLOYEE = 'EMPLOYEE'

}
