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
      <!-- <h1 class="text-3xl font-bold text-gray-800 mb-8">Employee Dashboard</h1> -->

      <div v-if="loading" class="text-gray-600 text-center">Loading data...</div>
      <div v-if="error" class="text-red-600 text-center">{{ error }}</div>
      
      <div v-if="employees.length > 0" class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Employee Summary</h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-700">Total Employees:</h3>
              <p class="text-xl font-semibold">{{ formatNumber(totalEmployees) }}</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-700">Total Salary:</h3>
              <p class="text-xl font-semibold">{{ formatNumber(totalSalary | currency) }}</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-700">Highest Salary:</h3>
              <p class="text-xl font-semibold">{{ formatNumber(highestSalary | currency) }}</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-700">Lowest Salary:</h3>
              <p class="text-xl font-semibold">{{ formatNumber(lowestSalary | currency) }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-6">
        <button @click="fetchEmployees" class="bg-[#a1a1aa] text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-600 transition">
          Load Employee Data
        </button>
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
      loading: false,
      error: null
    };
  },
  computed: {
    totalEmployees() {
      return this.employees.length;
    },
    totalSalary() {
      return this.employees.reduce((acc, emp) => {
      // แปลง emp.Salary เป็นจำนวนเต็ม (หรือทศนิยม) ก่อนบวก
      const salary = parseFloat(emp.Salary) || 0; // ใช้ parseFloat เพื่อรองรับทศนิยม
      return acc + salary;
    }, 0);
    },
    highestSalary() {
      return this.employees.length > 0 ? Math.max(...this.employees.map(emp => emp.Salary)) : 0;
    },
    lowestSalary() {
      return this.employees.length > 0 ? Math.min(...this.employees.map(emp => emp.Salary)) : 0;
    }
  },
  methods: {
    async fetchEmployees() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('amazonaws.com/production/employees');
        this.employees = response.data.employees || [];
      } catch (err) {
        this.error = 'Failed to load employee data.';
      } finally {
        this.loading = false;
      }
    },
    formatNumber(value) {
      if (!value) return '';
      return Number(value).toLocaleString();
    }
  
  }
};
</script>

