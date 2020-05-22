import HTTP from '../http';
import router from '../router/index';

export default{
    namespaced: true,
    state:{
        registerEmail: 'hi',
        registerPassword: '123123',
        registerError: null,
        loginEmail: 'hi',
        loginPassword: '123123',
        loginError: null,
        token: null,
    },
    actions:{
        register({ commit, state }){
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword
            }).then(({ data }) => {
                commit('setToken', data.token);  //store token
                router.push('/')
            }).catch(()=>{
                commit('setRegisterError', "This email has already been registered.");
            });
        },
        login({ commit, state }){
            commit('setLoginError', null);
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword
            }).then(({ data }) => {
                commit('setToken', data.token);  //store token
                router.push('/')
            }).catch(()=>{
                commit('setLoginError', "Please check your email and password.");
            });
        },
        logout({ commit }){
            commit('setToken', null);
            router.push('/login')
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token;
        },
        setRegisterError(state, error){
            state.registerError = error;
        },
        setRegisterEmail(state, email){
            state.registerEmail = email;
        },
        setRegisterPassword(state, password){
            state.registerPassword = password;
        },
        setLoginError(state, error){
            state.loginError = error;
        },
        setLoginEmail(state, email){
            state.loginEmail = email;
        },
        setLoginPassword(state, password){
            state.loginPassword = password;
        },
    },
    getters:{
        isLoggedIn(state){
            return state.token
        }
    }
}