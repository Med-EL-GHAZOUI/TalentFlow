import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<any[]> {
    const users = await this.usersRepository.find({ relations: { employee: true } });
    return users.map(u => ({
      id: u.id,
      email: u.email,
      role: u.role,
      firstName: u.employee ? u.employee.firstName : 'Admin',
      lastName: u.employee ? u.employee.lastName : 'User'
    }));
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
