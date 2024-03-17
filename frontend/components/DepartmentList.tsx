import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchDepartmentsAsync, Department } from '../store/departmentSlice';

const DepartmentList: React.FC = () => {
  const dispatch = useDispatch();
  const { departments, status, error } = useSelector((state: RootState) => state.departments);

  useEffect(() => {
    dispatch(fetchDepartmentsAsync()); // Dispatch the async thunk
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Departments</h1>
      <ul>
        {departments.map((department: Department) => (
          <li key={department.id}>
            {department.name} - {department.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
