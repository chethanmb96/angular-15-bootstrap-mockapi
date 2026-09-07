import { Component, OnInit } from '@angular/core';
import { ContactItem, NewContactItem } from './models/item.model';
import { MockApiService } from './services/mockapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: ContactItem[] = [];
  isLoading = false;
  isModalOpen = false;
  searchTerm = '';
  theme: 'light' | 'dark' = 'light';

  formData: {
    id?: string;
    name: string;
    email: string;
    role: string;
    department: string;
    status: string;
    avatar: string;
    bio: string;
  } = this.emptyForm();

  constructor(private apiService: MockApiService) {}

  ngOnInit(): void {
    this.initTheme();
    this.loadItems();
  }

  get filteredItems(): ContactItem[] {
    let result = [...this.items];

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase().trim();
      result = result.filter(item =>
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.role && item.role.toLowerCase().includes(q)) ||
        (item.department && item.department.toLowerCase().includes(q)) ||
        (item.bio && item.bio.toLowerCase().includes(q))
      );
    }

    // Numbering ascending starting from 1 (numeric sort by ID)
    return result.sort((a, b) => {
      const idA = a.id ? Number(a.id) : 0;
      const idB = b.id ? Number(b.id) : 0;
      return idA - idB;
    });
  }

  loadItems(): void {
    this.isLoading = true;
    this.apiService.getAll().subscribe({
      next: (data) => {
        this.items = Array.isArray(data) ? data : [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading contacts from MockAPI', err);
        this.isLoading = false;
      }
    });
  }

  openModal(item?: ContactItem): void {
    if (item) {
      this.formData = {
        id: item.id,
        name: item.name,
        email: item.email,
        role: item.role,
        department: item.department,
        status: item.status || 'Active',
        avatar: item.avatar || '',
        bio: item.bio || ''
      };
    } else {
      this.formData = this.emptyForm();
    }
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  saveItem(): void {
    if (!this.formData.name.trim() || !this.formData.email.trim()) return;

    if (this.formData.id) {
      const id = this.formData.id;
      this.apiService.update(id, this.formData).subscribe({
        next: (updated) => {
          this.items = this.items.map(item => item.id === id ? { ...item, ...this.formData } : item);
          this.closeModal();
        }
      });
    } else {
      const newItem: NewContactItem = {
        name: this.formData.name.trim(),
        email: this.formData.email.trim(),
        role: this.formData.role || 'Member',
        department: this.formData.department || 'General',
        status: this.formData.status || 'Active',
        avatar: this.formData.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.formData.name}`,
        bio: this.formData.bio.trim()
      };

      this.apiService.create(newItem).subscribe({
        next: (created) => {
          this.items = [...this.items, created];
          this.closeModal();
        }
      });
    }
  }

  deleteItem(item: ContactItem): void {
    if (!item.id) return;
    if (confirm(`Delete "${item.name}" (#${item.id}) from MockAPI?`)) {
      this.apiService.delete(item.id).subscribe({
        next: () => {
          this.items = this.items.filter(i => i.id !== item.id);
        }
      });
    }
  }

  initTheme(): void {
    const saved = (localStorage.getItem('bootstrap-theme') as 'light' | 'dark') || 'light';
    this.setTheme(saved);
  }

  toggleTheme(): void {
    const next = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(next);
  }

  private setTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
    localStorage.setItem('bootstrap-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  private emptyForm() {
    return {
      name: '',
      email: '',
      role: '',
      department: '',
      status: 'Active',
      avatar: '',
      bio: ''
    };
  }
}
