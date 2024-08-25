<template>
  <div>
    <nav class="bg-white shadow-md sticky top-0 z-10 w-full">
      <div class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/home" class="text-2xl font-bold text-blue-800 hover:text-blue-600 transition">Employee</a>
        <div class="hidden lg:flex space-x-6">
          <a href="/add" class="text-gray-800 hover:text-blue-500 transition">Add</a>
          <a href="/delete" class="text-gray-800 hover:text-blue-500 transition">Delete</a>
          <a href="/update" class="text-gray-800 hover:text-blue-500 transition">Update</a>
          <a href="/get" class="text-gray-800 hover:text-blue-500 transition">Get</a>
          <a href="/getall" class="text-gray-800 hover:text-blue-500 transition">GetAll</a>
          <a href="/dashboard" class="text-gray-800 hover:text-blue-500 transition">Dashboard</a>
        </div>
        <button class="lg:hidden text-gray-800 focus:outline-none" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>

    <div class="p-6 bg-gray-50 min-h-screen">
      <button @click="fetchEmployees" class="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition">
        Get All Employees
      </button>

      <div v-if="loading" class="mt-4 text-gray-600">Loading...</div>
      <div v-if="error" class="mt-4 text-red-600">{{ error }}</div>

      <div v-if="employees.length" class="mt-6">
        <p class="text-gray-700 mb-4">Total Employees: {{ filteredEmployees.length }}</p>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name or job title..."
          class="mb-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <table class="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr class="bg-gray-100 text-gray-700">
              <th class="border border-gray-300 px-4 py-2">Full Name</th>
              <th class="border border-gray-300 px-4 py-2">Job Title</th>
              <th class="border border-gray-300 px-4 py-2">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in filteredEmployees" :key="employee.employeeid" class="border-b hover:bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">{{ employee.full_name }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ employee.job_title }}</td>
              <td class="border border-gray-300 px-4 py-2">
                ${{ (employee.Salary ? parseFloat(employee.Salary).toFixed(2) : 'N/A') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      employees: [],
      searchQuery: '',
      loading: false,
      error: null,
      cache: null, // เพิ่มการตั้งค่า cache
    };
  },
  computed: {
    filteredEmployees() {
      if (!this.searchQuery) {
        return this.employees;
      }
      const query = this.searchQuery.toLowerCase();
      return this.employees.filter(employee => 
        employee.full_name.toLowerCase().includes(query) ||
        employee.job_title.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    async fetchEmployees() {
      if (this.cache) { // ใช้ข้อมูลใน cache หากมี
        this.employees = this.cache;
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('amazonaws.com/production/employees');
        this.employees = response.data.employees;
        this.cache = this.employees; // บันทึกข้อมูลใน cache
      } catch (err) {
        this.error = 'Failed to fetch employees.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
