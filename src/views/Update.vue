<template>
  
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

    <div class="bg-gray-100 min-h-screen p-6">
    <div class="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Update Employee</h1>

      <form @submit.prevent="updateEmployee" class="space-y-4">
        <div>
          <label for="employeeId" class="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
          <input
            v-model="employeeId"
            type="text"
            id="employeeId"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label for="updateKey" class="block text-sm font-medium text-gray-700 mb-1">Update Key</label>
          <input
            v-model="updateKey"
            type="text"
            id="updateKey"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label for="updateValue" class="block text-sm font-medium text-gray-700 mb-1">Update Value</label>
          <input
            v-model="updateValue"
            type="text"
            id="updateValue"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-[#f0abfc] text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-bg-pink-300"
        >
          Update Employee
        </button>
      </form>

      <div v-if="loading" class="mt-4 text-gray-500">Updating employee...</div>
      <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
      <div v-if="success" class="mt-4 text-green-500">{{ success }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employeeId: '',
      updateKey: '',
      updateValue: '',
      loading: false,
      error: null,
      success: null
    };
  },
  methods: {
    async updateEmployee() {
      this.loading = true;
      this.error = null;
      this.success = null;
      try {
        const response = await axios.patch('amazonaws.com/production/employee', {
          employeeId: this.employeeId,
          updateKey: this.updateKey,
          updateValue: this.updateValue
        });
        this.success = 'Employee updated successfully!';
        // Clear form after successful update
        this.employeeId = '';
        this.updateKey = '';
        this.updateValue = '';
      } catch (err) {
        this.error = 'Failed to update employee.';
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
