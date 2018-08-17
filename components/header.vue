<template>
  <v-toolbar fixed light flat app>
    <v-btn flat to="/">Blokr</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="connected" flat @click="signOut">SignOut</v-btn>
      <v-btn flat to="/user/login">Login</v-btn>
      <v-btn flat to="/user/create">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      connected: false,
    };
  },
  methods: {
    async signOut() {
      try {
        await this.$store.dispatch('signOutUser');
      } finally {
        this.$router.replace('login');
      }
    },
  },
}
</script>

<style>

</style>
