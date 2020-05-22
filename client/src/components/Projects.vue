<template>
  <Panel title="Projects">
      <div v-for='project in projects' :key='project.id'>
          {{ project.title}}
      </div>

    <v-layout row wrap>
      <v-flex xs10 pl-3>
        <v-text-field placeholder="project name" :value="newProjectName" @input="setNewProjectName"></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn class="mt-5" outlined fab dark color="indigo" x-small @click='createProject'>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("projects", ["newProjectName","projects"])
  },
  methods: {
    ...mapMutations("projects", ["setNewProjectName"]),
    ...mapActions("projects", ["createProject"])
  }
};
</script>

<style>
</style>