<template>
  <v-toolbar flat app>
    <v-btn flat to="/">Blokr</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/login">Login</v-btn>
      <v-btn flat to="/signup">Sign Up</v-btn>
      <v-btn @click="signOut" flat to="/">Logout</v-btn>
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
