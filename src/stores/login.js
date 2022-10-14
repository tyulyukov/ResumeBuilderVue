import { defineStore } from 'pinia';
import { useApiStore } from "./api";
import {useAuthUserStore} from "./user";

export const useAuthLoginStore = defineStore('auth/login', {
    state: () => ({
        error: null,
        loading: false,
        internalError: null
    }),
    actions: {
        logIn (email, password) {
            this.$reset()
            const apiStore = useApiStore()

            this.loading = true

            fetch(apiStore.combineUrl('auth/login'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: email, password})
            })
                .then(res => {
                    this.loading = false

                    if (res && res.status === 200) {
                        return res.text()
                    }
                    else if (res && res.status === 422) {
                        this.error = "Incorrect email/password"
                        return;
                    }
                    else if (res && res.status === 500) {
                        this.error = "Server error"
                        return;
                    }
                })
                .then(data => {
                    if (data) {
                        apiStore.refreshToken(data)

                        const authUserStore = useAuthUserStore()
                        authUserStore.getUserInfo()

                        this.router.push({path: '/resumes'})
                    }
                })
                .catch(err => {
                    this.loading = false
                    this.internalError = err
                    this.error = "No connection..."
                })
        }
    }
})