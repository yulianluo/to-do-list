<template>
  <Panel title="Projects">
    <!-- display all projects -->
    <div class="project mt-2" v-for="project in projects" :key="project.id">
      <v-layout>
        <v-flex xs9 class="text-left mt-2">
          <span v-if="!project.isEditMode">{{ project.title }}</span>
          <v-text-field
          autofocus
            v-if="project.isEditMode"
            :value="project.title"
            @keyup.enter="saveProject(project)"
            @input="setEditProjectName({project, title:$event})"
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-btn
            text
            icon
            color="indigo lighten-2"
            v-if="!project.isEditMode"
            @click="setEditMode(project)"
          >
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
          <v-btn
            text
            icon
            color="indigo lighten-2"
            v-if="project.isEditMode"
            @click="saveProject(project)"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>

    <!-- add new project -->
    <v-layout row wrap class="mt-2">
      <v-flex xs10 pl-3>
        <v-text-field placeholder="project name" :value="newProjectName" @input="setNewProjectName"></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn class="mt-5" outlined fab dark color="indigo" x-small @click="createProject">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.fetchProjects();
  },
  computed: {
    ...mapState("projects", ["newProjectName", "projects"])
  },
  methods: {
    ...mapMutations("projects", [
      "setNewProjectName",
      "setEditMode",
      "setEditProjectName"
    ]),
    ...mapActions("projects", ["createProject", "fetchProjects", "saveProject"])
  }
};
</script>

<style>
.project {
  font-size: 20px;
}
</style>