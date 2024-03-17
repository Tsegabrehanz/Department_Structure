import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Department } from '../types/types';
import { fetchDepartments, addDepartment as apiAddDepartment, updateDepartment as apiUpdateDepartment } from '../services/departmentService';

export const fetchDepartmentsAsync = createAsyncThunk('departments/fetchDepartments', async () => {
  return await fetchDepartments();
});

export const addDepartmentAsync = createAsyncThunk('departments/addDepartment', async (department: Department) => {
  return await apiAddDepartment(department);
});

export const updateDepartmentAsync = createAsyncThunk('departments/updateDepartment', async ({ id, department }: { id: number, department: Department }) => {
  return await apiUpdateDepartment(id, department);
});

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    departments: [] as Department[],
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartmentsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDepartmentsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.departments = action.payload;
      })
      .addCase(fetchDepartmentsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addDepartmentAsync.fulfilled, (state, action) => {
        state.departments.push(action.payload);
      })
      .addCase(updateDepartmentAsync.fulfilled, (state, action) => {
        const index = state.departments.findIndex((department) => department.id === action.payload.id);
        if (index !== -1) {
          state.departments[index] = action.payload;
        }
      });
  },
});

export default departmentsSlice.reducer;
