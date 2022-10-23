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
                    'Content-Type': 'application/json'
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
        download(id, name) {
            const apiStore = useApiStore()

            fetch(apiStore.combineUrl(`resumes/download/${id}`), {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + apiStore.jwt,
                },
            })
                .then(res => {
                    console.log(res)

                    if (res && res.status === 200)
                        return res.blob()
                })
                .then(data => {
                    if (data) {
                        let url = window.URL.createObjectURL(data);
                        let a = document.createElement('a');
                        a.href = url;
                        a.download = name + ".pdf";
                        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                        a.click();
                        a.remove();
                    }
                })
                .catch(err => {
                    this.internalError = err
                })
        },
        delete(id) {
            const apiStore = useApiStore()

            fetch(apiStore.combineUrl(`resumes/delete/${id}`), {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + apiStore.jwt,
                },
            })
                .then(res => {
                    if (res && res.status === 200) {
                        for (let i = 0; i < this.resumes.length; i++) {
                            if (this.resumes[i].id === id)
                                return this.resumes.splice(i, 1);
                        }
                    }
                })
                .catch(err => {
                    this.internalError = err
                })
        }
    }
})