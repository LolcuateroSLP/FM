<template>
    <div>
        <div class="app-nav">
            <img @click="$router.push('/dashboard')" class="logo" src="/img/LOGO-Interfil.png" alt="Transpais">
            <div class="divider"></div>
            <iButton v-if="user != null && APIAdmin" @click.native="settings" type="text" shape="circle" icon="md-settings"/>
            <Badge v-if="user != null" :count="notAttendedNotificationsCount" class="notif">
                <iButton @click.native="notifications" type="text" shape="circle" icon="md-notifications"/>
            </Badge>
            <el-dropdown style="margin-left: 10px" v-if="user != null" trigger="click">
                <iButton v-if="user != null" type="text" shape="circle" icon="md-contact"/>
                <el-dropdown-menu slot="dropdown">
                    <UserAvatar type="column" :name="user.nombre + ' ' + user.apellido" :footer="user.correo" />
                    <iButton @click="logout" long type="primary">Cerrar Sesión</iButton>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        data(){
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                "user",
                "notAttendedNotificationsCount",
            ]),
            APIAdmin(){
                if(this.user){
                    return this.user.Rol.nombre == "Admin API Control";
                }
                return false;
            }
        },
        methods: {
            logout(){
                this.$root.deleteCookie("user")
                this.$store.dispatch("SET_USER", { user: null, store: false })
                this.$router.push("/")
            },
            notifications(){
                EventBus.$emit("show-notifications", true)
            },
            settings(){
                this.$router.push('/ajustes')
            }
        },
        mounted(){
            EventBus.$on("toggle-drawer", value => {
                this.drawer = value
            })
        }
    }
</script>

<style lang="sass">
        
    .app-nav
        display: flex
        align-items: center
        background-color: #015382 !important
        width: 100%
        height: 64px
        & .logo
            width: 100px
        & .menu-button
            margin-right: 5px
        & .user
            display: flex
            justify-content: center
            align-items: center
            color: #515a6e !important
            & .info
                margin-right: 8px
    .drawer-top
        padding: 10px 0
        margin-bottom: 10px
        & img
            width: 100px
    .drawer-item
        padding: 8px 0
        display: flex
        align-items: center
        cursor: pointer
        color: #515a6e !important
        & .ivu-icon
            margin-right: 15px
        & p
            font-size: 11px

    .drawer-user
        padding: 0 0 15px 0
        border-bottom: 1px solid #ececec
        display: flex
        justify-content: center
        align-items: center
        margin-bottom: 15px
        & p
            line-height: 1.6
            // text-align: right
        & .info
            flex: 1
            margin-left: 7px
            & .name
                font-weight: bold
                font-size: 0.9em
            & .code
                font-size: 0.8em
                color: grey
    
    .transferIconRotate
        transform: rotate(90deg)
</style>
