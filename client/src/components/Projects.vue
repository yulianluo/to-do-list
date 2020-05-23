<template>
  <Panel title="Projects">
    <!-- display all projects -->
    <div class="project mt-2" v-for="project in projects" :key="project.id">
      <v-layout>
        <v-flex xs9 class="text-left">
          <span  v-if="!project.isEditMode">{{ project.title }}</span>
          <v-text-field
            autofocus
            dense
            
            color="indigo lighten-1"
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
            <!-- delete project -->
          <v-btn text icon color="red lighten-2" @click="deleteProject(project)">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>

    <!-- add new project -->
    <v-layout row wrap class="mt-2">
      <v-flex xs9 pl-3>
        <v-text-field
          placeholder="project name"
          :value="newProjectName"
          @input="setNewProjectName"
          @keyup.enter="createProject"
          clearable
          color="indigo lighten-1"
        ></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn class="mt-5 ml-4"  dark color="indigo lighten-1" small @click="createProject">
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
    ...mapActions("projects", [
      "createProject",
      "fetchProjects",
      "saveProject",
      "deleteProject"
    ])
  }
};
</script>

<style>
.project {
  font-size: 20px;
}
</style>