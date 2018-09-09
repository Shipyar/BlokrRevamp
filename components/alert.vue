<template>
  <v-card>
    <v-snackbar bottom right color="error">
      <v-btn dark flat dissmisable @click.native="onClose">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    onClose() {
      this.$emit('dismissed');
    },
  },
};