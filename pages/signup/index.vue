<template>
<v-layout row justify-center align-center>
  <v-flex xs12 sm8 md6>
    <v-card class="elevation-2">
      <v-card-title primary-title>
        <h3 class="headline mb-0">Create a new Account</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field name="email" label="Email Address" id="email" v-model="user.email" required type="email" prepend-icon="email">
          </v-text-field>
          <v-text-field name="password" label="Password" id="password" v-model="user.password" required type="password" prepend-icon="lock">
          </v-text-field>
          <v-text-field name="confirmPassword" label="Confirm Password" id="confirmPassword" v-model="user.confirmPassword" required
            type="password" :rules="[comparePassword]" prepend-icon="lock">
          </v-text-field>
        </v-form>
        <v-btn round block type="submit" @click="signUpUser" color="primary" :loading="loading" :disabled="loading">
          Sign Up!
        </v-btn>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Signup',
  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  components: {
  },
  computed: {
    comparePassword() {
      return this.user.password !== this.user.confirmPassword ? 'Passwords dont match' : true;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  watch: {
  },
  methods: {
    ...mapActions('user', ['signUp']),
    signUpUser() {
      this.signUp({
        email: this.user.email,
        // ! The final password we send needs to be a combination thats clarified
        password: this.user.password
      })
      .then(() => {this.$router.replace({ path: 'user/1' })})
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