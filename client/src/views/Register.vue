<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4>
        <h1>Register</h1>
        <v-text-field
          color="indigo lighten-1"
          label="Email"
          :value="registerEmail"
          @input="setRegisterEmail"
        ></v-text-field>
        <v-text-field
          color="indigo lighten-1"
          label="Password"
          type="password"
          autocomplete="new-password"
          :value="registerPassword"
          @input="setRegisterPassword"
        ></v-text-field>
        <v-alert outlined dense type="error" class="mt-2" :value="registerError">{{ registerError }}</v-alert>
        <v-btn class="indigo darken-1 mt-8" dark @click="register">Register</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("authentication", [
      "registerEmail",
      "registerPassword",
      "registerError"
    ])
  },
  methods: {
    ...mapMutations("authentication", [
      "setRegisterEmail",
      "setRegisterPassword"
    ]),
    ...mapActions("authentication", ["register"])
  }
};
</script>

<style>
</style>