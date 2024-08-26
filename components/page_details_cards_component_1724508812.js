<!--
INSTRUCTION: Summary: Contains a section with three cards with black background and white text. The three cards are side by side and each contains a detail name in bold above a detail value.
-->

<template>
  <section id="page-details-cards-component" class="py-12 bg-gradient-to-br from-pink-500 to-purple-700 min-h-[430px]">
    <h2 id="details-title" class="text-3xl font-bold mb-10 pl-6 text-white text-center">Details</h2>
    <ul id="details-list" class="grid gap-8 min-[480px]:grid-cols-3 text-sm px-6">
      <li id="project-length" class="px-8 py-8 rounded-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-xl hover:bg-opacity-20 transition duration-300 border border-white border-opacity-20">
        <div class="font-semibold text-white text-xl mb-3">Quality</div>
        <div class="text-pink-100">Verified, high-quality water from trusted sources</div>
      </li>
      <li id="start-date" class="px-8 py-8 rounded-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-xl hover:bg-opacity-20 transition duration-300 border border-white border-opacity-20">
        <div class="font-semibold text-white text-xl mb-3" id="start-date-des-1">Variety</div>
        <time class="text-pink-100" id="start-time-des-1">Choose from spring, mineral, filtered, and specialty waters</time>
      </li>
      <li id="end-date" class="px-8 py-8 rounded-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-xl hover:bg-opacity-20 transition duration-300 border border-white border-opacity-20">
        <div class="font-semibold text-white text-xl mb-3" id="end-date-des-1">Convenience</div>
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
