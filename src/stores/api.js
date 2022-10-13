import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', {
    state: () => ({
        serverUrl: 'http://localhost:8080/',
        jwt: localStorage.getItem('jwt') || null
    }),
    getters: {
        combineUrl: (state) => {
            return (resource) => {
                let url1 = state.serverUrl.replace(/\/+$/, '');
                let url2 = resource.replace(/^\//, '');

                return url1 + '/' + url2;
            }
        },
    },
    actions: {
        refreshToken(jwt) {
            this.jwt = jwt
            localStorage.setItem('jwt', jwt)
        },
        clearToken() {
            this.jwt = null
            localStorage.removeItem('jwt')
        }
    }
})