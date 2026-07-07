export interface User {

  id: number;

  firstname: string;

  lastname: string;

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
