<template>
  <v-toolbar flat app>
    <v-btn flat to="/">Blokr</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="connected" flat @click="signOut">SignOut</v-btn>
      <v-btn flat to="/login">Login</v-btn>
      <v-btn flat to="/signup">Sign Up</v-btn>
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
