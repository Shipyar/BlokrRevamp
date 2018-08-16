<template>
<v-card>
  <v-snackbar
    bottom
    color="error"
    v-model="unit"
  >
    {{ text }}
    <v-btn dark flat dissmisable @click.native="onClose">Close</v-btn>
  </v-snackbar>
</v-card>
</template>

<script>
export default {
  props: ['text', 'snack'],
  data() {
    return {
      unit: false,
    };
  },
  methods: {
    onClose() {
      this.$emit('dismissed');
    },
  },
};