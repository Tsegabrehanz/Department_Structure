// department.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';


@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  async findById(id: number): Promise<Department> {
    return this.departmentRepository.findOne({ where: { id } });
  }

  async create(departmentData: Partial<Department>): Promise<Department> {
    const department = this.departmentRepository.create(departmentData);
    return this.departmentRepository.save(department);
  }

  async update(id: number, departmentData: Partial<Department>): Promise<Department> {
    await this.departmentRepository.update(id, departmentData);
    return this.departmentRepository.findOneBy({id: id});
  }

  async delete(id: number): Promise<void> {
    await this.departmentRepository.delete(id);
  }

  async findManagingDepartment(id: number): Promise<Department> {
    return this.departmentRepository.findOne({ where: { id }, relations: ['managingDepartment'] });
  }   

  async findDepartmentsUnderManagement(id: number): Promise<Department[]> {
  return this.departmentRepository.find({ where: { managingDepartmentId: id } });
}

}
