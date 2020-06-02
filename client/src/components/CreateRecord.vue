<template>
  <v-layout row wrap class="mt-2">
    <v-flex xs9 pl-3>
      <v-text-field
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)" 
        @keyup.enter="$emit('create')"
        clearable
        color="indigo lighten-1"
      ></v-text-field>
    </v-flex>
    <v-flex xs3  >
      <v-btn class="mt-5" dark color="indigo lighten-1" small @click="$emit('create')">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props: [
        'placeholder',
        'value',
    ],
};
</script>

<style>
</style>