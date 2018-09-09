<template>
  <v-app>
    <Header
      :profile="profile"
      :loggedIn="loggedIn"
    />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/header.vue';
export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters('user',[
      'profile',
      'loggedIn'
    ])
  }
}
</script>
