// frontend/components/DepartmentForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextInput } from '@mantine/core';

interface DepartmentFormProps {
  department?: { id: number; name: string; description: string; managingDepartmentId: number | null };
  onSubmit: (department: { id: number; name: string; description: string; managingDepartmentId: number | null }) => void;
}

const DepartmentForm: React.FC<DepartmentFormProps> = ({ department, onSubmit }) => {
  const [name, setName] = useState(department?.name || '');
  const [description, setDescription] = useState(department?.description || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id: department?.id || Date.now(), name, description, managingDepartmentId: department?.managingDepartmentId || null });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <TextInput
        label="Name"
        id="name"
        required
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        className="mb-2"
      />
      <TextInput
        label="Description"
        id="description"
        required
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
        className="mb-2"
      />
      <Button type="submit" variant="filled">Submit</Button>
    </form>
  );
};

export default DepartmentForm;
