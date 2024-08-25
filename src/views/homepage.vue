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


    <div class="flex items-center justify-center h-screen">
      <div class="text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgyp0cGPFS4V3HEtHeE2hO0udk6QbTA5Kcg&s"
          alt="Placeholder Image"
          class="mx-auto mb-4"
        />
        <!-- <p class="text-xl font-bold">Vue.js</p> -->
      </div>

      <div class="text-center">
        <img
          src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-svg-png-icon-download-1.png"
          alt="Placeholder Image"
          class="mb-4"
          width="100px"
          height="150px"
        />
        <!-- <p class="text-xl font-bold">Vue.js</p> -->
      </div>

      <div class="text-center">
        <img
          src="https://logowik.com/content/uploads/images/axios5736.logowik.com.webp"
          alt="Placeholder Image"
          class="mx-auto mb-4"
          width="350px"
        />
        <!-- <p class="text-xl font-bold">Vue.js</p> -->
      </div>
    </div>

</template>

<script>
export default {
  name: "CenterContent",
};
</script>

<style scoped>
/* ใส่สไตล์เพิ่มเติมที่นี่ถ้าต้องการ */
</style>
