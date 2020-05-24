<template>
  <v-layout>
    <v-flex xs9 class="text-left">
      <span v-if="!isEditMode">{{ title }}</span>
      <v-text-field
        autofocus
        dense
        color="indigo lighten-1"
        v-if="isEditMode"
        :value="title"
        @keyup.enter="$emit('onSave')"
        @input="$emit('onInput', $event)"
        
      ></v-text-field>
    </v-flex>
    <v-flex xs3>
      <v-btn
        text
        icon
        color="indigo lighten-2"
        v-if="!isEditMode"
        @click="$emit('onEdit')"
      >
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>
      <v-btn
        text
        icon
        color="indigo lighten-2"
        v-if="isEditMode"
        @click="$emit('onSave')"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <!-- delete -->
      <v-btn text icon color="red lighten-2" @click="$emit('onDelete')">
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props:[
        'isEditMode',
        'title',
        'record'

    ]
};
</script>

<style>
</style>