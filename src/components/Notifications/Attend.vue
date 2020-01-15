<template>
    <el-dialog title="Atender Notificación" :visible.sync="show" width="80%" append-to-body>
        <Row v-if="Object.entries(notification).length > 0">
            <Col span="24">
                <Row>
                    <Col span="24">
                        <p style="font-size: 0.8em; color: grey;">{{ notification.fecha | moment("DD/MMMM/YYYY HH:mm") }}</p>
                    </Col>
                    <Col span="24" style="margin: 5px 0">
                        <Row>
                            <Col span="12" style="display: flex; align-items: center; margin-top: 3px;">
                                <div style="width: 20px; height: 20px; border-radius: 50%; background-color: red;"></div>
                                <p style="font-size: 0.7em; color: grey; margin-left: 3px;">Urgente</p>
                            </Col>
                            <Col span="12" style="display: flex; align-items: center; margin-top: 3px;">
                                <img style="width: 20px" :src="'/img/icons/variables/'+notification.Variable.icono"/>
                                <p style="font-size: 0.7em; color: grey; margin-left: 3px;">{{ notification.Variable.nombre }}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <h3>{{ notification.Equipo.nombre }}</h3>
                <h3>{{ notification.descripcion }}</h3>
            </Col>
        </Row>
        <br>
        <el-input :disabled="!attendable" type="textarea" :rows="5" placeholder="Escribe un mensaje para el grupo" v-model="comments"/>
        <Alert style="margin-top: 15px" v-if="!attendable" type="error" show-icon>Ésta notificación ya fue atendida por alguien más.</Alert>
        <span slot="footer" class="dialog-footer">
            <el-button @click="show = false">Cancelar</el-button>
            <el-button :disabled="!attendable || comments.length == 0" :loading="loading" @click="confirm" type="primary">Atender</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        data(){
            return {
                show: false,
                notification: {},
                comments: "",
                attendable: true,
                loading: false,
            }
        },
        computed: {
            ...mapGetters([
                "user",
                "notAttendedNotifications"
            ])
        },
        methods: {
            confirm(){
                this.loading = true
                $.ajax({
                    type: 'post',
                    url: this.$root.API_URL+'/attend_notification.php',
                    dataType: 'json',
                    data: JSON.stringify({
                        "user": this.user.usuario,
                        "alerta_id": this.notification.alerta_id,
                        "mensaje": this.comments,
                        "fecha": moment().format("YYYY-MM-DD HH:mm:ss").toString(),
                    }),
                    beforeSend: function(x) {
                        if (x && x.overrideMimeType) {
                            x.overrideMimeType("application/json");
                        }
                    },
                    success: (response) => {
                        if(response.success == true){
                            EventBus.$emit("confirm-notification", response.notification)
                        }
                        else {
                            this.$Message.error({
                                content: response.message,
                                duration: 6,
                            })
                            this.loading = false
                        }
                    },
                    error: (request, status, error) => {
                        this.$Message.error({
                            content: response.message,
                            duration: 6,
                        })
                        this.loading = false                        
                    }
                })

                // let n = {
                //     ...this.notification,
                //     comments: this.comments,
                //     date: moment().format("YYYY-MM-DD HH:mm:ss").toString(),
                //     attendedBy: {
                //         name: "Javier Rodriguez",
                //         date: "23/09/2019 13:55:45"
                //     }
                // }
                // EventBus.$emit("confirm-notification", n)
            },
            init(){
                this.loading = false
                this.notification = {}
                this.comments = ""
                this.attendable = true
            },
            // get notAttendedNotifications notifications ids and check if thsi notifications id stills there. if not, attendable will be false
            checkIfAttendable(){
                let IDS = [];
                _.each(this.notAttendedNotifications, (n) => {
                    IDS.push(n.alerta_id)
                })

                let i = _.findIndex(IDS, (id) => {
                    return id == this.notification.alerta_id
                })

                // not attendable anymore
                if(i != -1){
                    this.attendable = true
                    console.log("Notification still available")
                }
                else {
                    this.attendable = false
                    console.log("Notification not available anymore")
                }
            }
        },
        mounted(){
            EventBus.$on("show-confirm-attend", (value, notification = {}) => {
                this.notification ={
                    ...notification,
                }
                this.show = value


                if(value == false){
                    this.init()
                }
            })

            // every 2s check if popup is active and if it still attendable
            setInterval(() => {
                if(this.show == true){
                    this.checkIfAttendable()
                }
            }, 2000)
        }
    }
</script>