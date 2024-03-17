// departmentService.ts
import axios from 'axios';
import { Department } from '../types/types';

const API_BASE_URL = 'http://localhost:3000'; // Update with your API base URL

export const fetchDepartments = async (): Promise<Department[]> => {
  const response = await axios.get(`${API_BASE_URL}/departments`);
  return response.data;
};

export const addDepartment = async (department: Department): Promise<Department> => {
  const response = await axios.post(`${API_BASE_URL}/departments`, department);
  return response.data;
};

export const updateDepartment = async (id: number, department: Department): Promise<Department> => {
  const response = await axios.put(`${API_BASE_URL}/departments/${id}`, department);
  return response.data;
};

// export other functions as needed
