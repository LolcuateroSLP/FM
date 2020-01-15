<template>
    <el-card style="margin-bottom: 15px;">
        <Row type="flex" justify="end">
            <Col span="24">
                <Row>
                    <Col span="12">
                        <p style="font-size: 0.8em; color: grey;">{{ notification.fecha | moment("DD/MMMM/YYYY HH:mm") }}</p>
                    </Col>
                    <Col span="12">
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
            <Col span="24" style="margin-top: 10px;">
                <template v-if="notification.AttendedBy">
                    <UserAvatar style="justify-content: flex-start; padding-left: 0;" :header="attendedDate(notification.fecha_rec)" :name="notification.AttendedBy.nombre + ' ' + notification.AttendedBy.apellido" />
                    <p style="padding-left: 40px; margin-top: -8px; font-size: 0.9em;">{{ notification.mensaje_rec }}</p>
                </template>
                <template v-else>
                    <iButton @click.native="attend(notification)" long type="primary" size="small">Atender</iButton>
                </template>
            </Col>
        </Row>
    </el-card>
</template>

<script>
    export default {
        props: {
            notification: { required: true, type: [Object, Array] }
        },
        methods: {
            attend(notification){
                EventBus.$emit("show-confirm-attend", true, notification)
            },
            attendedDate(date){
                return moment(date, "YYYY/MM/DD HH:mm:ss").format("DD/MMMM/YYYY HH:mm");
            },
        }
    }
</script>