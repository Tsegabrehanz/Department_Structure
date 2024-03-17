// components/Department.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface DepartmentProps {
  id: number;
  name: string;
  description: string;
}

const Department: React.FC<DepartmentProps> = ({ id, name, description }) => {
  const [managingDepartment, setManagingDepartment] = useState<string | null>(null);
  const [subDepartments, setSubDepartments] = useState<string[]>([]);
  const [showManagingDepartment, setShowManagingDepartment] = useState(false);
  const [showSubDepartments, setShowSubDepartments] = useState(false);

  const fetchManagingDepartment = async () => {
    const response = await axios.get(`/api/departments/${id}`);
    setManagingDepartment(response.data.managingDepartment);
  };

  const fetchSubDepartments = async () => {
    const response = await axios.get(`/api/departments/${id}`);
    setSubDepartments(response.data.subDepartments);
  };

  return (
    <div>
      <h3>Department Name: {name}</h3>
      <p>Description: {description}</p>
      <button onClick={() => setShowManagingDepartment(!showManagingDepartment)}>
        {showManagingDepartment ? 'Hide' : 'Display'} Managing Department
      </button>
      {showManagingDepartment && (
        <div>
          Managing Department: {managingDepartment ?? 'None'}
          <button onClick={fetchManagingDepartment}>Fetch Managing Department</button>
        </div>
      )}
      <button onClick={() => setShowSubDepartments(!showSubDepartments)}>
        {showSubDepartments ? 'Hide' : 'Display'} Sub Departments
      </button>
      {showSubDepartments && (
        <div>
          Sub Departments:
          {subDepartments.map((subDepartment, index) => (
            <div key={index}>{subDepartment}</div>
          ))}
          <button onClick={fetchSubDepartments}>Fetch Sub Departments</button>
        </div>
      )}
    </div>
  );
};

export default Department;
