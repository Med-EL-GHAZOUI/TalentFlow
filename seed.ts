// @ts-nocheck
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

  const skillRepo = AppDataSource.getRepository(Skill);
  const deptRepo = AppDataSource.getRepository(Department);
  const jobRepo = AppDataSource.getRepository(Job);
  const jobSkillRepo = AppDataSource.getRepository(JobSkill);
  const userRepo = AppDataSource.getRepository(User);
  const empRepo = AppDataSource.getRepository(Employee);
  const empSkillRepo = AppDataSource.getRepository(EmployeeSkill);
  const trainRepo = AppDataSource.getRepository(Training);

  // 1. Create Skills
  const skillsData = [
    { name: 'Techniques Agricoles', category: 'Hard Skill', description: 'Techniques de culture et récolte' },
    { name: 'Contrôle Qualité ISO 9001', category: 'Hard Skill', description: 'Normes de qualité' },
    { name: 'Maintenance Industrielle', category: 'Hard Skill', description: 'Entretien des machines' },
    { name: 'Outils Digitaux RH', category: 'Hard Skill', description: 'SIRH et paie' },
    { name: 'Logistique et Transport', category: 'Hard Skill', description: 'Gestion de flotte' },
    { name: 'Management d\'équipe', category: 'Soft Skill', description: 'Leadership et gestion' },
    { name: 'Négociation Commerciale', category: 'Hard Skill', description: 'Ventes et achats' },
    { name: 'Analyse Financière', category: 'Hard Skill', description: 'Audit et finance' },
    { name: 'Communication', category: 'Soft Skill', description: 'Communication interne et externe' },
    { name: 'Résolution de conflits', category: 'Soft Skill', description: 'Gestion de crise' }
  ];
  const skills = await Promise.all(skillsData.map(s => skillRepo.save(skillRepo.create(s as any))));

  // 2. Create Departments
  const deptsData = [
    { name: 'Production Agricole' },
    { name: 'Qualité & Sécurité' },
    { name: 'Ressources Humaines' },
    { name: 'Logistique' },
    { name: 'Commercial & Ventes' },
    { name: 'Finance' },
    { name: 'Maintenance' }
  ];
  const depts = await Promise.all(deptsData.map(d => deptRepo.save(deptRepo.create(d as any))));

  // 3. Create Jobs & Required Skills
  const jobsData = [
    { title: 'Chef d\'exploitation', dept: depts[0], reqSkills: [{ skill: skills[0], level: 5 }, { skill: skills[5], level: 4 }] },
    { title: 'Ouvrier Agricole', dept: depts[0], reqSkills: [{ skill: skills[0], level: 3 }] },
    { title: 'Responsable Qualité', dept: depts[1], reqSkills: [{ skill: skills[1], level: 5 }, { skill: skills[5], level: 3 }] },
    { title: 'Technicien Qualité', dept: depts[1], reqSkills: [{ skill: skills[1], level: 3 }] },
    { title: 'Directeur RH', dept: depts[2], reqSkills: [{ skill: skills[3], level: 5 }, { skill: skills[5], level: 5 }, { skill: skills[9], level: 4 }] },
    { title: 'Chargé de Recrutement', dept: depts[2], reqSkills: [{ skill: skills[3], level: 3 }, { skill: skills[8], level: 4 }] },
    { title: 'Responsable Logistique', dept: depts[3], reqSkills: [{ skill: skills[4], level: 5 }, { skill: skills[5], level: 4 }] },
    { title: 'Chauffeur Poids Lourd', dept: depts[3], reqSkills: [{ skill: skills[4], level: 3 }] },
    { title: 'Directeur Commercial', dept: depts[4], reqSkills: [{ skill: skills[6], level: 5 }, { skill: skills[5], level: 5 }] },
    { title: 'Technicien de Maintenance', dept: depts[6], reqSkills: [{ skill: skills[2], level: 4 }] }
  ];

  const jobs: Job[] = [];
  for (const j of jobsData) {
    const job = await jobRepo.save(jobRepo.create({ title: j.title, department: j.dept } as any));
    for (const rs of j.reqSkills) {
      await jobSkillRepo.save(jobSkillRepo.create({ job, skill: rs.skill, requiredLevel: rs.level } as any));
    }
    jobs.push(job);
  }

  // 4. Create Trainings
  const trainingsData = [
    { title: 'Masterclass Management', targetSkill: skills[5], duration: 40, provider: 'HEM' },
    { title: 'Certification ISO 9001', targetSkill: skills[1], duration: 25, provider: 'Bureau Veritas' },
    { title: 'Perfectionnement SIRH', targetSkill: skills[3], duration: 15, provider: 'Interne COPAG' },
    { title: 'Techniques de Négociation', targetSkill: skills[6], duration: 20, provider: 'CCI' },
    { title: 'Gestion de flotte avancée', targetSkill: skills[4], duration: 10, provider: 'Interne COPAG' }
  ];
  const trainings = await Promise.all(trainingsData.map(t => trainRepo.save(trainRepo.create(t as any))));

  // 5. Create 20 Users and Employees
  const hashedPassword = await bcrypt.hash('password', 10);
  const firstNames = ['Mohamed', 'Ahmed', 'Youssef', 'Karim', 'Omar', 'Hassan', 'Rachid', 'Ali', 'Said', 'Brahim', 'Fatima', 'Khadija', 'Meryem', 'Nadia', 'Samira', 'Amina', 'Sara', 'Zineb', 'Leila', 'Houda'];
  const lastNames = ['EL GHAZOUI', 'Alaoui', 'Tazi', 'Bennis', 'Chraibi', 'Daoudi', 'Farah', 'Guessous', 'Haddad', 'Idrissi', 'Jalil', 'Kabbaj', 'Lahlou', 'Mennani', 'Naciri', 'Ouazzani', 'Qadiri', 'Rami', 'Zahiri', 'Bourkia'];
  
  for (let i = 0; i < 20; i++) {
    const role = i === 0 ? 'ADMIN' : (i < 3 ? 'RH' : (i < 8 ? 'MANAGER' : 'EMPLOYEE'));
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    const dept = job.department;
    
    // Create User
    const userPayload = {
      email: `${firstNames[i].toLowerCase()}.${lastNames[i].toLowerCase().replace(' ', '')}@copag.ma`,
      password: hashedPassword,
      role: role
    };
    const user: User = await userRepo.save(userRepo.create(userPayload as any)) as any;

    // Create Employee
    const empPayload = {
      firstName: firstNames[i],
      lastName: lastNames[i],
      email: user.email,
      phone: `06${Math.floor(Math.random() * 90000000 + 10000000)}`,
      hireDate: `202${Math.floor(Math.random() * 4)}-0${Math.floor(Math.random() * 9 + 1)}-15`,
      status: Math.random() > 0.1 ? 'Actif' : 'En congé',
      department: dept,
      job: job,
      user: user
    };
    const emp = await empRepo.save(empRepo.create(empPayload as any));

    // Assign skills based on Job required skills, with random variations (creating gaps or expert levels)
    const requiredSkills = await jobSkillRepo.find({ where: { job: { id: job.id } }, relations: { skill: true } });
    
    for (const rs of requiredSkills) {
      // Level between 1 and 5
      const actualLevel = Math.max(1, Math.min(5, rs.requiredLevel + Math.floor(Math.random() * 3) - 1)); 
      await empSkillRepo.save(empSkillRepo.create({
        employee: emp,
        skill: rs.skill,
        acquiredLevel: actualLevel
      } as any));
    }
    
    // Random extra skill
    if (Math.random() > 0.5) {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      if (!requiredSkills.find(rs => rs.skill?.id === randomSkill.id)) {
        await empSkillRepo.save(empSkillRepo.create({
          employee: emp,
          skill: randomSkill,
          acquiredLevel: Math.floor(Math.random() * 4) + 1
        } as any));
      }
    }
  }

  console.log('20 Employees seeded successfully!');
  await AppDataSource.destroy();
}

seed().catch(err => {
  console.error('Error during seeding:', err);
  process.exit(1);
});
