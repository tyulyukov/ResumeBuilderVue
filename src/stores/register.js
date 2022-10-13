import { defineStore } from 'pinia';
import { useApiStore } from "./api";
import {useAuthUserStore} from "./user";

export const useAuthRegisterStore = defineStore('auth/register', {
    state: () => ({
        error: null,
        loading: false,
        internalError: null,
    }),
    actions: {
        register (email, password, repeatPassword) {
            console.log("register")
            this.$reset();

            if (password !== repeatPassword) {
                this.error = "Passwords are not matching"
                return;
            }

            const apiStore = useApiStore()

            this.loading = true

            fetch(apiStore.combineUrl('auth/register'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: email, password})
            })
                .then(res => {
                    this.loading = false
                    console.log(res)

                    if (res && res.status === 200) {
                        return res.text()
                    }
                    else if (res && res.status === 400) {
                        this.error = "This email is already busy"
                        return;
                    }
                    else if (res && res.status === 500) {
                        this.error = "Server error"
                        return;
                    }
                })
                .then(data => {
                    console.log(data)
                    if (data) {
                        apiStore.refreshToken(data)

                        const authUserStore = useAuthUserStore()
                        authUserStore.getUserInfo()

                        this.router.push({path: '/'})
                    }
                })
                .catch(err => {
                    console.log(err)
                    this.loading = false
                    this.internalError = err
                    this.error = "No connection..."
                })
        }
    }
})