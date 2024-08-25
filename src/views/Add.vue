<template>
  <div class="bg-gray-100 min-h-screen">
    <nav class="bg-white shadow-md sticky top-0 z-10 w-full">
      <div
        class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <a href="/home" class="text-xl font-bold text-blue-800">Employee</a>
        <div class="hidden lg:flex space-x-6">
          <a href="/add" class="text-gray-800 hover:text-blue-500 transition"
            >Add</a
          >
          <a href="/delete" class="text-gray-800 hover:text-blue-500 transition"
            >Delete</a
          >
          <a href="/update" class="text-gray-800 hover:text-blue-500 transition"
            >Update</a
          >
          <a href="/get" class="text-gray-800 hover:text-blue-500 transition"
            >Get</a
          >
          <a href="/getall" class="text-gray-800 hover:text-blue-500 transition"
            >GetAll</a
          >
          <a
            href="/dashboard"
            class="text-gray-800 hover:text-blue-500 transition"
            >Dashboard</a
          >
        </div>
        <button
          class="lg:hidden text-gray-800 focus:outline-none"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
    <div class="p-6 max-w-lg mx-auto mt-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Add New Employee</h1>

      <form @submit.prevent="addEmployee" class="space-y-5">
        <div class="flex flex-col">
          <label
            for="employeeid"
            class="text-sm font-semibold text-gray-700 mb-1"
            >Employee ID</label
          >
          <input
            v-model="employee.employeeid"
            type="text"
            id="employeeid"
            class="border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div class="flex flex-col">
          <label
            for="job_title"
            class="text-sm font-semibold text-gray-700 mb-1"
            >Job Title</label
          >
          <input
            v-model="employee.job_title"
            type="text"
            id="job_title"
            class="border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div class="flex flex-col">
          <label
            for="full_name"
            class="text-sm font-semibold text-gray-700 mb-1"
            >Full Name</label
          >
          <input
            v-model="employee.full_name"
            type="text"
            id="full_name"
            class="border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div class="flex flex-col">
          <label for="Salary" class="text-sm font-semibold text-gray-700 mb-1"
            >Salary</label
          >
          <input
            v-model="employee.Salary"
            type="number"
            id="Salary"
            class="border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-yellow-400 text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
        >
          Add Employee
        </button>
      </form>

      <div v-if="loading" class="mt-4 text-gray-500">Adding employee...</div>
      <div v-if="error" class="mt-4 text-red-600">{{ error }}</div>
      <div v-if="success" class="mt-4 text-green-600">{{ success }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employee: {
        employeeid: "",
        job_title: "",
        full_name: "",
        Salary: 0,
      },
      loading: false,
      error: null,
      success: null,
    };
  },
  methods: {
    async addEmployee() {
      this.loading = true;
      this.error = null;
      this.success = null;
      try {
        await axios.post(
          "amazonaws.com/production/employee",
          this.employee
        );
        this.success = "Employee added successfully!";
        // Clear form after successful addition
        this.employee = {
          employeeid: "",
          job_title: "",
          full_name: "",
          Salary: 0,
        };
      } catch (err) {
        this.error = "Failed to add employee.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style>
p {
  font-size: 24px;
  color: black;
}
</style>
