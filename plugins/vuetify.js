import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#2AD19A', // a color that is not in the material colors palette
    accent: '#EF1A1C',
    secondary: '#0A1011',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: '#EF1A1C',
    success: colors.green.accent3
  }
})
