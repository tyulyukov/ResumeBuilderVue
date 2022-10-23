import { defineStore } from 'pinia';
import {useApiStore} from "./api";
import {useAuthUserStore} from "./user";

export const useCreateResumeStore = defineStore('resumes/create', {
    state: () => ({
        resume: {
            name: '',
            description: '',
            contactInformation: {
                email: '',
                phone: '',
                firstName: '',
                lastName: '',
                country: '',
                city: '',
                dateOfBirth: null
            },
            skills: [],
            educations: [],
            languages: [],
        },
        loading: false,
        internalError: null,
        error: null
    }),
    actions: {
        clear() {
            this.$reset()
        },
        create() {
            const apiStore = useApiStore()

            this.loading = true

            fetch(apiStore.combineUrl('resumes/create'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + apiStore.jwt,
                },
                body: JSON.stringify(this.resume)
            })
                .then(res => {
                    this.loading = false

                    if (res && res.status === 201) {
                        this.clear()
                        this.router.push('/resumes')
                    }
                    else if (res && res.status === 401) {
                        this.internalError = "Not authorized"

                        const authUserStore = useAuthUserStore()
                        authUserStore.logOut()

                        return;
                    }
                    else if (res && res.status === 400) {
                        this.internalError = "Some field is empty"
                    }
                })
                .catch(err => {
                    this.loading = false
                    this.internalError = err
                })
        }
    }
})