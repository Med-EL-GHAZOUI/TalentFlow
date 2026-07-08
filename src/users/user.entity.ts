import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Employee } from '../employees/employee.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: 'user' })
  role!: string;

  @OneToOne(() => Employee, employee => employee.user)
  employee: Employee;
}
