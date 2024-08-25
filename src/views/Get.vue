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
    <div class="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg mt-5">
      <h1 class="text-2xl font-bold mb-4">Search Employee Details</h1>
      <div class="mb-4">
        <label for="employee-id" class="block text-sm font-medium text-gray-700"
          >Employee ID:</label
        >
        <input
          id="employee-id"
          v-model="employeeId"
          placeholder="Enter Employee ID"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        @click="getEmployeeDetails"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Search Employee
      </button>

      <div
        v-if="employeeData"
        class="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50"
      >
        <h2 class="text-xl font-semibold mb-2">Employee Details:</h2>
        <p><strong>Full Name:</strong> {{ employeeData.full_name }}</p>
        <p><strong>Job Title:</strong> {{ employeeData.job_title }}</p>
        <p><strong>Salary:</strong> {{ employeeData.Salary }}</p>
        <p><strong>Employee ID:</strong> {{ employeeData.employeeid }}</p>
      </div>

      <div
        v-if="error"
        class="mt-4 p-4 border border-red-300 rounded-md bg-red-50"
      >
        <p class="text-sm text-red-600">Error: {{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employeeId: "", // ตัวแปรสำหรับเก็บค่า ID ที่กรอกเข้ามา
      employeeData: null,
      error: null,
    };
  },
  methods: {
    async getEmployeeDetails() {
      try {
        // สร้าง URL โดยใช้ตัวแปร employeeId ที่กรอกเข้ามา
        const url = `amazonaws.com/production/employee?employeeid=${this.employeeId}`;

        // ส่ง GET request ไปยัง API
        const response = await axios.get(url);

        // เก็บข้อมูลที่ได้จาก API
        this.employeeData = response.data;
        this.error = null;
      } catch (err) {
        this.error = "Error fetching data. Please try again.";
        this.employeeData = null;
      }
    },
  },
};
</script>

<style scoped>
/* สไตล์เพิ่มเติม */
</style>
