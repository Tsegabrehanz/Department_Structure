// frontend/pages/dashboard.tsx

import React from 'react';
import { Button, Card, Text } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import DepartmentList from '../components/DepartmentList';
import DepartmentForm from '../components/DepartmentForm';
import { addDepartment } from '../services/departmentService';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4">
      <Text size="lg" className="text-center my-8">Organization Structure</Text>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card shadow="xs" className="p-4">
          <DepartmentList />
        </Card>
        <Card shadow="xs" className="p-4">
          <DepartmentForm onSubmit={(department) => dispatch(addDepartment(department) as any)} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
