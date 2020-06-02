import Vue from 'vue';
import HTTP from '../http';

// import router from '../router/index';

export default {
    namespaced: true,
    state: {
        tasks: [],
        newTaskName: null,
    },
    actions: {
       
        fetchTasksForProject({ commit }, project) {
            return HTTP().get(`/projects/${project.id}/tasks`)
                .then(({ data }) => {
                    commit('setTasks', data);
                })
        },
        createTask({ commit, state, rootState }) {
            return HTTP().post(`/projects/${rootState.projects.currentProject.id}/tasks`, {
                description: state.newTaskName,
            }).then(({ data }) => {
                commit('appendTask', data);
                commit('setNewTaskName', null);
            })
        },
        saveTask({ commit }, task ) {
            return HTTP().patch(`/tasks/${task.id}`, task)
                .then(() => {
                    commit('unsetEditMode', task);                 
                })
        },
        deleteTask({ commit }, task ) {
            return HTTP().delete(`/tasks/${task.id}`)
                .then(() => {
                    commit('removeTask', task);                 
                })
        },
        
    },
    getters: {
        selectedProject(state){
            return state.selectedProject
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setNewTaskName(state, name) {
            state.newTaskName = name;
        },
        appendTask(state, task) {
            state.tasks.push(task);
        },
        setTaskDescription(state, {task, description} ) {
            task.description = description;
        },
        setEditMode(state, task) {
            Vue.set(task, 'isEditMode', true);
        },
        unsetEditMode(state, task) {
            Vue.set(task, 'isEditMode', false)
        },
        removeTask(state, task) {
            state.tasks.splice(state.tasks.indexOf(task), 1)
        },
        setTaskCondition(state, task) {
            task.completed = !task.completed
        },
       
    },

}