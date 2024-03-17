// department.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
//import {Department} from './department.entity';


@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  managingDepartmentId: number;

  @ManyToOne(() => Department, { nullable: true })
  managingDepartment: Department;

  @OneToMany(() => Department, department => department.managingDepartment)
  departmentsUnderManagement: Department[];
}
export default Department;

