import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        notifications: [],
    },
    mutations: {
        SET_USER: ( state, user ) => {
			state.user = user
        },
        SET_NOTIFICATIONS: ( state, notifications ) => {
            state.notifications = notifications;
        }
    },
    actions: {
        SET_USER: ({ commit }, { user, store = true }) => {
            if(store){
                var d = new Date();
                d.setTime(d.getTime() + (365*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = "user" + "=" + JSON.stringify(user) + ";" + expires + ";path=/";
            }
			commit("SET_USER", user)
        },
        SET_NOTIFICATIONS: ({ commit }, { notifications }) => {
            commit("SET_NOTIFICATIONS", notifications);
        }
    },
    getters: {
        user: state => state.user,
        notifications: state => state.notifications,
        notAttendedNotifications: state => state.notifications.filter(n => n.reconocimiento == 0),
        attendedNotifications: state => state.notifications.filter(n => n.reconocimiento == 1),
        notAttendedNotificationsCount: state => state.notifications.filter(n => n.reconocimiento == 0).length,
	}
})
