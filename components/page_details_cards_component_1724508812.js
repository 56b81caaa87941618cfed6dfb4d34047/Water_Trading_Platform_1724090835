<!--
INSTRUCTION: Summary: Contains a section with three cards with black background and white text. The three cards are side by side and each contains a detail name in bold above a detail value.
-->

<template>
  <section id="page-details-cards-component" class="py-8 bg-gradient-to-br from-pink-400 to-purple-600">
    <h2 id="details-title" class="text-2xl font-semibold mb-8 pl-4 text-white">Details</h2>
    <ul id="details-list" class="grid gap-6 min-[480px]:grid-cols-3 text-sm px-4">
      <li id="project-length" class="px-6 py-6 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
        <div class="font-medium text-white text-lg mb-2">Quality</div>
        <div class="text-pink-100">Verified, high-quality water from trusted sources</div>
      </li>
      <li id="start-date" class="px-6 py-6 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
        <div class="font-medium text-white text-lg mb-2" id="start-date-des-1">Variety</div>
        <time class="text-pink-100" id="start-time-des-1">Choose from spring, mineral, filtered, and specialty waters</time>
      </li>
      <li id="end-date" class="px-6 py-6 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
        <div class="font-medium text-white text-lg mb-2" id="end-date-des-1">Convenience</div>
        <time class="text-pink-100" id="end-time-des-1">Easy ordering and delivery right to your doorstep</time>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PageDetailsCardsComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
