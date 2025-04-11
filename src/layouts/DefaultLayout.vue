<script setup>
import FooterDefault from '@/components/default/general/FooterDefault.vue'
import HeaderDefault from '@/components/default/general/HeaderDefault.vue'
</script>

<template>
  <main class="px-4">
    <!-- header start -->
    <HeaderDefault />
    <!-- header end -->

    <!-- content start -->
    <div class="wrapper min-h-[80vh]">
      <router-view />
    </div>
    <!-- content end -->

    <!-- footer start -->
    <FooterDefault />
    <!-- footer end -->
  </main>
</template>
