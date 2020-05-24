<template>
  <Panel title="Projects">
    <!-- display all projects -->
    <div class="project mt-2" v-for="project in projects" :key="project.id">
        <EditableRecord 
        :isEditMode="project.isEditMode"
        :title="project.title"
        @onInput="setEditProjectName({project, title:$event})"
        @onEdit="setEditMode(project)"
        @onSave="saveProject(project)"
        @onDelete="deleteProject(project)"
        />
    </div>

    <!-- add new project -->
    <CreateRecord 
    placeholder="project name" 
    @onInput="setNewProjectName"
    :value="newProjectName"
    @create = "createProject"
    />

  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import CreateRecord from "@/components/CreateRecord";
import EditableRecord from "@/components/EditableRecord";

export default {
  mounted() {
    this.fetchProjects();
  },
  components: {
    CreateRecord,
    EditableRecord
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