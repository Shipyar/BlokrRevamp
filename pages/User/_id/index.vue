<template>
  <div>
    <Navi/>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-btn
          absolute
          dark
          fab
          bottom
          right
          color="primary"
          class="mb-5"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Navi from '@/components/navigation.vue';

export default {
  components: {
    Navi
  }
}
</script>

<style>

</style>
