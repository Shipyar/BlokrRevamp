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
          @click="create = !create"
          color="primary"
          class="mb-5"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <CreateBlokr v-if="create" :display="true"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Navi from '@/components/navigation.vue';
import CreateBlokr from '@/components/utils/CreateBlocks.vue'

export default {
  data() {
    return {
      create: false
    }
  },
  components: {
    Navi,
    CreateBlokr
  }
}
</script>

<style>

</style>
