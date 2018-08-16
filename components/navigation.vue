<template>
  <v-navigation-drawer :mini-variant="miniVariant" fixed app>
    <v-btn icon @click.stop="miniVariant = !miniVariant">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-list>
      <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' }
      ],
      miniVariant: false
    }
  }
}
</script>

<style>

</style>
