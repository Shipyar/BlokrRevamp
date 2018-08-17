<template>
  <v-app>
    <Header/>
    <v-content>
      <v-container fluid>
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
