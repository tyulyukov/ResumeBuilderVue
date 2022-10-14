import { defineStore } from 'pinia';
import { useApiStore } from "./api";
import {useAuthUserStore} from "./user";

export const useResumeStore = defineStore('resumes', {
    state: () => ({
        resumes: null,
        loading: false,
        internalError: ''
    }),
    actions: {
        getUserResumes() {
            this.$reset()
            const apiStore = useApiStore()

            this.loading = true

            fetch(apiStore.combineUrl('resumes/get'), {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + apiStore.jwt,
                },
            })
                .then(res => {
                    this.loading = false

                    if (res && res.status === 200) {
                        return res.json()
                    }
                    else if (res && res.status === 401) {
                        this.internalError = "Not authorized"

                        const authUserStore = useAuthUserStore()
                        authUserStore.logOut()

                        return;
                    }
                })
                .then(data => {
                    if (data) {
                        this.resumes = data
                    }
                })
                .catch(err => {
                    this.loading = false
                    this.internalError = err
                })
        },
    }
})