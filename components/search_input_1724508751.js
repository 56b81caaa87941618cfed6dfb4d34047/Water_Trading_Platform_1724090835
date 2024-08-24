<template>
  <form class="max-w-md px-4 mx-auto mt-12">
    <div class="relative bg-pink-300 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer text-purple-600 absolute top-0 bottom-0 w-6 h-6 my-auto left-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="Search" class="w-full py-3 pl-12 pr-4 text-purple-800 bg-transparent border-2 border-purple-400 rounded-md outline-none focus:border-pink-500 placeholder-purple-300" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchInput', // Component name
  data() {
    return {};
  },
  delimiters: ['{', '}'] // Custom delimiters
};
</script>
