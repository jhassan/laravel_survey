import { createStore } from "vuex";

const store = createStore({
    state: {
        user:  {
            data: {
                name: "Jawad"
            },
            token: ''
        },
				jawad: {
					name: "user"
				}
    },
    getters: {},
    actions: {},
    mutaions: {},
    modules: {}
});

export default store;
