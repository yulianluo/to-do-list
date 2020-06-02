<template>
  <Panel title="Tasks">
    <div class="task mt-2" v-for="task in tasks" :key="task.id">
      <EditableRecord
        style="color:#BDBDBD"
        v-if="task.completed"
        :isEditMode="task.isEditMode"
        :title="task.description"
        @onInput="setTaskDescription({task, description:$event})"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)"
      >
        <v-icon
          class="float-left pr-1"
          color="grey lighten-1"
          @click="checkClicked(task)"
        >{{ task.completed ? "mdi-check-circle" : "mdi-checkbox-blank-circle-outline" }}</v-icon>
      </EditableRecord>

      <EditableRecord
        v-if="!task.completed"
        :isEditMode="task.isEditMode"
        :title="task.description"
        @onInput="setTaskDescription({task, description:$event})"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)"
      >
        <v-icon
          class="float-left pr-1"
          @click="checkClicked(task)"
        >{{ task.completed ? "mdi-check-circle" : "mdi-checkbox-blank-circle-outline" }}</v-icon>
      </EditableRecord>
    </div>

    <CreateRecord
      placeholder="task"
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    />
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";
import CreateRecord from "@/components/CreateRecord";
import EditableRecord from "@/components/EditableRecord";

export default {
  components: {
    CreateRecord,
    EditableRecord
  },
  computed: {
    ...mapState("tasks", ["tasks", "newTaskName"])
  },
  methods: {
    ...mapMutations("tasks", [
      "setNewTaskName",
      "setTaskDescription",
      "setEditMode",
      "setTaskCondition"
    ]),
    ...mapActions("tasks", ["createTask", "saveTask", "deleteTask"]),
    checkClicked(task) {
      this.setTaskCondition(task);
      this.saveTask(task);
    }
  }
};
</script>

<style>
.task {
  font-size: 18px;
}
</style>