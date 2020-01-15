<template>
    <el-dialog title="Notificaciones" :visible.sync="show" fullscreen>
        <Attend/>
        <el-tabs :stretch="true">
            <el-tab-pane label="Sin Atención">
                <!-- List -->
                <Notification v-for="notif in notAttendedNotifications" :key="notif.alerta_id" :notification="notif"/>
                <!-- If empty -->
                <Alert v-if="notAttendedNotifications.length == 0" type="warning" show-icon>No existen notificaciones.</Alert>
            </el-tab-pane>
            <el-tab-pane label="Atendidas">
                <!-- List -->
                <Notification v-for="notif in attendedNotifications" :key="notif.alerta_id" :notification="notif"/>
                <!-- If empty -->
                <Alert v-if="attendedNotifications.length == 0" type="warning" show-icon>No existen notificaciones sin atender.</Alert>
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
    import Attend from "./Attend"
    import { mapGetters } from "vuex"
    import Notification from "./Notification"

    export default {
        data(){
            return {
                show: false,
            }
        },
        computed: {
            ...mapGetters([
                "user",
                "notAttendedNotifications",
                "attendedNotifications",
            ])
        },
        methods: {
            getNotifications(){
                if(this.user){
                    $.ajax({
                        type: 'post',
                        url: this.$root.API_URL+'/notifications.php',
                        dataType: 'json',
                        data: JSON.stringify({
                            "user": this.user.usuario,
                        }),
                        beforeSend: function(x) {
                            if (x && x.overrideMimeType) {
                                x.overrideMimeType("application/json");
                            }
                        },
                        success: (response) => {
                            if(response.success == true){
                                this.$store.dispatch("SET_NOTIFICATIONS", {notifications: response.notifications})
                            }
                            else {
                                this.$Message.error({
                                    content: response.message,
                                    duration: 6,
                                })
                                EventBus.$emit("toggle-loading", false)
                            }
                        },
                        error: (request, status, error) => {
                            this.$Message.error({
                                content: response.message,
                                duration: 6,
                            })
                            EventBus.$emit("toggle-loading", false)
                        }
                    })
                }
            }
        },
        mounted(){
            let self = this

            // At the begining
            setTimeout(() => {
                self.getNotifications();
            }, 1000)

            //Get updated every 15sec
            setInterval(() => {
                this.getNotifications();
            }, 5000)

            EventBus.$on("show-notifications", (value) => {
                this.show = true
            })

            EventBus.$on("load-notifications", (value) => {
                if(value){
                    this.getNotifications();
                }
            })

            EventBus.$on("confirm-notification", (notification) => {
                this.getNotifications()
                EventBus.$emit("show-confirm-attend", false)
            })
        },
        components: {
            Attend,
            Notification,
        }
    }
</script>