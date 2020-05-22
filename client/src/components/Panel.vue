<template>
  <v-card>
      <v-toolbar flat dense dark color="indigo lighten-1">
          <v-toolbar-title>
              {{ title }}
          </v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
          <slot>No slot content define</slot>
      </div>
  </v-card>
</template>

<script>
export default {
    props:{
        title: String,
    },
}
</script>

<style>

</style>