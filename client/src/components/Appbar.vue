<template>
  <v-app-bar fixed color="indigo" dense dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title class="mr-4">Todo List</v-toolbar-title>
    <v-toolbar-items>
      <v-btn depressed color="indigo" v-if='isLoggedIn'>Projects</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn depressed color="indigo" small v-if='!isLoggedIn' to="/register">
        <v-icon small class="pr-1">mdi-account-plus-outline</v-icon>Register
      </v-btn>
      <v-btn depressed color="indigo" small v-if='!isLoggedIn'>
        <v-icon small class="pr-1">mdi-account-box</v-icon>Login
      </v-btn>
      <v-btn depressed color="indigo" small v-if='isLoggedIn' @click='logout'>
        <v-icon small class="pr-1">mdi-logout-variant</v-icon>Logout
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed:{
    ...mapGetters('authentication',[
      'isLoggedIn',
    ])
  },
  methods:{
    ...mapActions('authentication',[
      'logout'  //setToken to null to logout
    ])
  }
};
</script>

<style>
</style>