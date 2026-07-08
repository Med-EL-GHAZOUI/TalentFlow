import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './src/users/user.entity';
import { Employee } from './src/employees/employee.entity';
import { Department } from './src/departments/department.entity';
import { Job } from './src/jobs/job.entity';
import { Skill } from './src/skills/skill.entity';
import { JobSkill } from './src/jobs/job-skill.entity';
import { EmployeeSkill } from './src/employees/employee-skill.entity';
import { Training } from './src/trainings/training.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'TalentFlow-GPEC',
  entities: [User, Employee, Department, Job, Skill, JobSkill, EmployeeSkill, Training],
  synchronize: true,
});

async function seed() {
  await AppDataSource.initialize();
  console.log('Database connected.');

  // Drop schema and recreate it
  await AppDataSource.synchronize(true);
  console.log('Database cleared and synchronized.');

  // 1. Create Skills
  const skillRepo = AppDataSource.getRepository(Skill);
  const skillAgri = await skillRepo.save(skillRepo.create({ name: 'Techniques Agricoles', category: 'Hard Skill', description: 'Maîtrise des techniques de culture' } as any));
  const skillMngt = await skillRepo.save(skillRepo.create({ name: 'Management d\'équipe', category: 'Soft Skill', description: 'Gestion des collaborateurs' } as any));
  const skillRH = await skillRepo.save(skillRepo.create({ name: 'Outils Digitaux RH', category: 'Hard Skill', description: 'Utilisation des SIRH' } as any));
  const skillTech = await skillRepo.save(skillRepo.create({ name: 'Maintenance Industrielle', category: 'Hard Skill', description: 'Réparation des machines' } as any));

  // 2. Create Departments
  const deptRepo = AppDataSource.getRepository(Department);
  const deptAgri = await deptRepo.save(deptRepo.create({ name: 'Production Agricole', managerId: 1 } as any));
  const deptRH = await deptRepo.save(deptRepo.create({ name: 'Ressources Humaines', managerId: 2 } as any));

  // 3. Create Jobs & JobSkills (Required levels)
  const jobRepo = AppDataSource.getRepository(Job);
  const jobSkillRepo = AppDataSource.getRepository(JobSkill);
  
  const jobManager = await jobRepo.save(jobRepo.create({ title: 'Chef d\'exploitation', description: 'Gère la production', department: deptAgri } as any));
  await jobSkillRepo.save(jobSkillRepo.create({ job: jobManager, skill: skillAgri, requiredLevel: 5 } as any));
  await jobSkillRepo.save(jobSkillRepo.create({ job: jobManager, skill: skillMngt, requiredLevel: 4 } as any));

  const jobRH = await jobRepo.save(jobRepo.create({ title: 'Responsable RH', description: 'Gère les RH', department: deptRH } as any));
  await jobSkillRepo.save(jobSkillRepo.create({ job: jobRH, skill: skillRH, requiredLevel: 5 } as any));
  await jobSkillRepo.save(jobSkillRepo.create({ job: jobRH, skill: skillMngt, requiredLevel: 3 } as any));

  // 4. Create Users (with bcrypt password 'password')
  const userRepo = AppDataSource.getRepository(User);
  const hashedPassword = await bcrypt.hash('password', 10);
  
  const user1 = await userRepo.save(userRepo.create({ email: 'mohamed@copag.ma', password: hashedPassword, role: 'admin' } as any));
  const user2 = await userRepo.save(userRepo.create({ email: 'ahmed@copag.ma', password: hashedPassword, role: 'user' } as any));

  // 5. Create Employees
  const empRepo = AppDataSource.getRepository(Employee);
  const empSkillRepo = AppDataSource.getRepository(EmployeeSkill);

  const emp1 = await empRepo.save(empRepo.create({ 
    firstName: 'Mohamed', lastName: 'EL GHAZOUI', 
    email: 'mohamed@copag.ma', phone: '0600000000', 
    hireDate: '2023-01-15', status: 'Actif', 
    department: deptAgri, job: jobManager, user: user1 
  } as any));
  
  // Mohamed has missing skills to trigger recommendations
  await empSkillRepo.save(empSkillRepo.create({ employee: emp1, skill: skillAgri, acquiredLevel: 5 } as any)); // Expert
  await empSkillRepo.save(empSkillRepo.create({ employee: emp1, skill: skillMngt, acquiredLevel: 2 } as any)); // Missing 2 levels (requires 4)

  const emp2 = await empRepo.save(empRepo.create({ 
    firstName: 'Ahmed', lastName: 'Alaoui', 
    email: 'ahmed@copag.ma', phone: '0611111111', 
    hireDate: '2020-05-10', status: 'Actif', 
    department: deptRH, job: jobRH, user: user2 
  } as any));

  await empSkillRepo.save(empSkillRepo.create({ employee: emp2, skill: skillRH, acquiredLevel: 4 } as any)); // Missing 1 level (requires 5)
  await empSkillRepo.save(empSkillRepo.create({ employee: emp2, skill: skillMngt, acquiredLevel: 4 } as any)); // Exceeds (requires 3)

  // 6. Create Trainings
  const trainRepo = AppDataSource.getRepository(Training);
  await trainRepo.save(trainRepo.create({ 
    title: 'Leadership & Management Avancé', 
    provider: 'Coursera', 
    startDate: '2024-10-15', endDate: '2024-10-17', duration: 20, 
    targetSkill: skillMngt,
    employees: [emp1] // Mohamed is already enrolled in this one!
  } as any));

  await trainRepo.save(trainRepo.create({ 
    title: 'Maîtrise des SIRH Modernes', 
    provider: 'Interne COPAG', 
    startDate: '2024-11-01', endDate: '2024-11-05', duration: 35, 
    targetSkill: skillRH 
  } as any));

  console.log('Database seeded successfully!');
  await AppDataSource.destroy();
}

seed().catch(err => {
  console.error('Error during seeding:', err);
  process.exit(1);
});
