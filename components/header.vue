<template>
  <v-toolbar flat app>
    <v-btn flat to="/">Blokr</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/login">Login</v-btn>
      <v-btn flat to="/signup">Sign Up</v-btn>
      <v-menu
        auto
        offset-y
        bottom
      >
      <v-avatar slot="activator" class="mr-5">
      </v-avatar>
      <v-list>
        <v-list-tile @click="signOut">
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      connected: false,
    };
  },

  methods: {
    ...mapActions('user', ['logout']),
    signOut() {
      this.logout();
    },
  },
}
</script>

<style>

</style>
