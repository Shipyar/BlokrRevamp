<template>
  <v-layout row justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-2">
        <v-card-title primary-title>
          <h3 class="headline mb-0">Login to your Account</h3>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field name="email" label="Email Address" id="email" v-model="user.email" required type="email" prepend-icon="email">
            </v-text-field>
            <v-text-field name="password" label="Password" id="password" v-model="user.password" required type="password" prepend-icon="lock">
            </v-text-field>
          </v-form>
          <v-btn round block type="submit" @click.prevent="loginUser" color="primary" :loading="loading">
            Login
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
    <alert @dismissed="onDismissed"/>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Alert from '@/components/alert'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  components: {
    Alert
  },
  computed: {
    loading(state) {
      return this.$store.getters.loading;
    },
  },
  methods: {
    ...mapActions('user', ['login']),
    loginUser() {
      this.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {this.$router.replace({ path: 'user/1' })})
      .catch((e) => {
        console.log(e)
      })
    },
    onDismissed() {
      this.$store.dispatch('clearError');
    },
  },
};
</script>

<style scoped>
.background{
  background-color: #2AD19A;
}
</style>