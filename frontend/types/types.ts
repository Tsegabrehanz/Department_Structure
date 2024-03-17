// types.ts
export interface Department {
    id: number;
    name: string;
    description: string;
    managingDepartmentId?: number | null;
  }
  