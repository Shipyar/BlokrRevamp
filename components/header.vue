<template>
  <v-toolbar fixed light flat app>
    <router-link to="/" tag="img"></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="connected" flat @click="signOut">SignOut</v-btn>
      <nuxt-link to="/user/login">Login</nuxt-link>
      <nuxt-link to="/user/create">Sign Up</nuxt-link>
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
