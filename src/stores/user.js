import { defineStore } from 'pinia';
import { useApiStore } from "./api";

export const useAuthUserStore = defineStore('auth/user', {
    state: () => ({
        id: null,
        email: '',
        createdAt: '',
        internalError: ''
    }),
    getters: {
        loggedIn: (state) => state.id !== null,
    },
    actions: {
        updateUser(payload) {
            this.id = payload.id
            this.email = payload.username
            this.createdAt = payload.createdAt
        },
        clearUser() {
            this.$reset()
        },
        logOut() {
            const apiStore = useApiStore()

            this.clearUser()
            apiStore.clearToken()

            this.router.push('/auth')
        },
        getUserInfo() {
            if (this.loggedIn)
                return;

            const apiStore = useApiStore()

            if (apiStore.jwt)
            {
                fetch(apiStore.combineUrl('auth/myself'), {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + apiStore.jwt,
                        'Content-Type': 'application/json'
                    },
                })
                    .then(res => {
                        if (res && res.status === 200) {
                            return res.json()
                        }
                        else if (res && res.status === 401) {
                            this.logOut()
                            return;
                        }
                    })
                    .then(data => {
                        if (data)
                            this.updateUser(data)
                    })
                    .catch(err => {
                        this.internalError = err
                    })
            }
            else
            {
                this.clearUser()
            }
        },
    }
})