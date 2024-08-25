<template>
  <div class="bg-gray-100 min-h-screen">
    <nav class="bg-white shadow-md sticky top-0 z-10 w-full">
      <div class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/home" class="text-xl font-bold text-blue-800">Employee</a>
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

    <div class="lg:hidden fixed top-16 right-0 w-64 bg-white shadow-lg rounded-lg p-4 z-20" v-if="menuOpen">
      <a href="/add" class="block py-2 text-gray-800 hover:text-blue-500">Add</a>
      <a href="/delete" class="block py-2 text-gray-800 hover:text-blue-500">Delete</a>
      <a href="/update" class="block py-2 text-gray-800 hover:text-blue-500">Update</a>
      <a href="/get" class="block py-2 text-gray-800 hover:text-blue-500">Get</a>
      <a href="/getall" class="block py-2 text-gray-800 hover:text-blue-500">GetAll</a>
      <a href="/dashboard" class="block py-2 text-gray-800 hover:text-blue-500">Dashboard</a>
    </div>

    <main class="p-6">
     

      <form @submit.prevent="confirmDelete" class="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <div class="mb-4">
          <label for="employeeid" class="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
          <input
            v-model="employeeid"
            type="text"
            id="employeeid"
            class="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-red-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete Employee
        </button>
      </form>

      <div v-if="loading" class="mt-4 text-gray-500">Deleting employee...</div>
      <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
      <div v-if="success" class="mt-4 text-green-500">{{ success }}</div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employeeid: '',
      loading: false,
      error: null,
      success: null
    };
  },
  methods: {
    async confirmDelete() {
      const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
      if (confirmDelete) {
        this.deleteEmployee();
      }
    },
    async deleteEmployee() {
      this.loading = true;
      this.error = null;
      this.success = null;
      try {
        await axios.delete(`amazonaws.com/production/employee`, {
          data: { employeeId: this.employeeid }
        });
        this.success = 'Employee deleted successfully!';
        // Clear form after successful deletion
        this.employeeid = '';
      } catch (err) {
        this.error = 'Failed to delete employee.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
/* Your custom styles if any */
</style>
