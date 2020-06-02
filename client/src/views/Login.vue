<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4>
        <h1>Login</h1>
        <v-text-field
          color="indigo lighten-1"
          label="Email"
          :value="loginEmail"
          @input="setLoginEmail"
        ></v-text-field>
        <v-text-field
          color="indigo lighten-1"
          label="Password"
          type="password"
          autocomplete="new-password"
          :value="loginPassword"
          @input="setLoginPassword"
        ></v-text-field>
        <v-alert outlined dense type="error" class="mt-2" :value="loginError">{{ loginError }}</v-alert>
        <v-btn class="indigo darken-1 mt-8" dark @click="login">Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("authentication", ["loginEmail", "loginPassword", "loginError"])
  },
  methods: {
    ...mapMutations("authentication", ["setLoginEmail", "setLoginPassword"]),
    ...mapActions("authentication", ["login"])
  }
};
</script>

<style>
</style>