<template>
  <div class="about">
    <h1>This is an about page</h1>

    <v-layout>
      <v-flex xs6 offset-3>
        <v-card color="indigo lighten-2 mt-4" dark height="300">
          <v-card-title class="headline">Keep track of your projects and tasks</v-card-title>
          <v-card-actions>
            <v-btn text to='/register' v-if="!isLoggedIn">Register Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
    ...mapGetters("authentication", ["isLoggedIn"])
  },
};
</script>

<style>
</style>