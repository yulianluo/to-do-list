import Vue from 'vue';
import HTTP from '../http';

// import router from '../router/index';

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,
    },
    actions: {
        fetchProjects({ commit }) {  //fetch existed projects
            return HTTP().get('/projects')
                .then(({ data }) => {
                    commit('setProjects', data);                 
                })
        },
        createProject({ commit, state }) {
            return HTTP().post('/projects', {
                title: state.newProjectName,
            }).then(({ data }) => {
                commit('appendProject', data);
                commit('setNewProjectName', null);
            })
        },
        saveProject({ commit }, project ) {
            return HTTP().patch(`/projects/${project.id}`, project)
                .then(() => {
                    commit('unsetEditMode', project);                 
                })
        },
        deleteProject({ commit }, project ) {
            return HTTP().delete(`/projects/${project.id}`)
                .then(() => {
                    commit('removeProject', project);                 
                })
        },
    },
    getters: {

    },
    mutations: {
        setNewProjectName(state, name) {
            state.newProjectName = name;
        },
        appendProject(state, project) {
            state.projects.push(project);
        },
        setProjects(state, projects) {
            state.projects = projects;
        },
        setEditProjectName(state, {project, title}){
            project.title = title;
        },
        setEditMode(state, project) {
            // project.setEditMode = true;
            Vue.set(project, 'isEditMode', true)
        },
        unsetEditMode(state, project) {
            // project.setEditMode = true;
            Vue.set(project, 'isEditMode', false)
        },
        removeProject(state, project) {
            state.projects.splice(state.projects.indexOf(project), 1)
        }
    }
}