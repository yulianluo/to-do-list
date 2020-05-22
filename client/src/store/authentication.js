import HTTP from '../http';
import router from '../router/index';

export default{
    namespaced: true,
    state:{
        registerEmail: 'hi',
        registerPassword: '123123',
        registerError: null,
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
                commit('setRegisterError', "This email has already been registered");
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
        }
    },
    getters:{
        isLoggedIn(state){
            return state.token
        }
    }
}