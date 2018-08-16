<template>
  <v-app>
    <v-content>
      <v-container>
        <Header/>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/header.vue';
export default {
  components: {
    Header
  }
}
</script>
