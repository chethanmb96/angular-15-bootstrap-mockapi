export interface ContactItem {
  id?: string;
  name: string;
  email: string;
  role: string;
  department: string;
  avatar?: string;
  status: string;
  bio: string;
  createdAt?: string;
}

export type NewContactItem = Omit<ContactItem, 'id' | 'createdAt'>;
