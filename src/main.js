import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "./plugins"
import "./filters"

Vue.config.productionTip = false

import Avatar from "./components/Avatar"
Vue.component("UserAvatar", Avatar)

import OneSignalMixin from "./mixins/onesignal"

new Vue({
    router,
    store,
    mixins: [OneSignalMixin],
    data(){
        return {
            API_URL: "https://wics-api.jrcode.dev",
        }
    },
    methods: {
        getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return JSON.parse(c.substring(name.length, c.length));
                }
            }
            return "";
        },
        deleteCookie(name) {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
    },
    mounted(){
        let user = this.getCookie("user")

        if(user != ""){
            this.$store.dispatch("SET_USER", {
                user: user,
                store: false,
            })
        }
    },
    render: h => h(App)
}).$mount('#app')
