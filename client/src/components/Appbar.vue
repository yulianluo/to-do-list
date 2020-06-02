<template>
  <v-app-bar fixed color="indigo" dense dark>
    <v-toolbar-title class="mx-4" color="white">
      <router-link style="color:white; text-decoration:none" to="/about">Todo List</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn depressed color="indigo" v-if="isLoggedIn" to="/">Projects</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn depressed color="indigo" small v-if="!isLoggedIn" to="/login">
        <v-icon small class="pr-1">mdi-account-box</v-icon>Login
      </v-btn>
      <v-btn depressed color="indigo" small v-if="!isLoggedIn" to="/register">
        <v-icon small class="pr-1">mdi-account-plus-outline</v-icon>Register
      </v-btn>
      <v-btn depressed color="indigo" small v-if="isLoggedIn" @click="logout">
        <v-icon small class="pr-1">mdi-logout-variant</v-icon>Logout
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("authentication", ["isLoggedIn"])
  },
  methods: {
    ...mapActions("authentication", [
      "logout" //setToken to null to logout
    ])
  }
};
</script>

<style>
</style>