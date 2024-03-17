// department.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Department> {
    return this.departmentService.findById(+id);
  }

  @Post()
  async create(@Body() departmentData: Partial<Department>): Promise<Department> {
    return this.departmentService.create(departmentData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() departmentData: Partial<Department>): Promise<Department> {
    return this.departmentService.update(+id, departmentData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.departmentService.delete(+id);
  }

  @Get(':id/managingDepartment')
  async findManagingDepartment(@Param('id') id: string): Promise<Department> {
    return this.departmentService.findManagingDepartment(+id);
  }

  @Get(':id/departmentsUnderManagement')
  async findDepartmentsUnderManagement(@Param('id') id: string): Promise<Department[]> {
    return this.departmentService.findDepartmentsUnderManagement(+id);
  }
}
