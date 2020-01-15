<template>
    <div class="body-login">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img style="width: 150px; margin: 10px 0 30px 0" src="/img/logo.png" alt="API Control">
        </div>
        <Form ref="loginForm" :model="login" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="login.user" prefix="md-contact" placeholder="Usuario"/>
            </FormItem>
            <FormItem prop="password">
                <Input v-model="login.password" prefix="md-lock" placeholder="Contraseña" type="password"/>
            </FormItem>
            <FormItem>
                <Button style="margin-top: 15px background-color: #015382 !important" long type="primary" @click="loginHandler">Ingresar</Button>
            </FormItem>
        </Form>
        <br><br>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <p class="center-text">Sistema desarrollado por</p>
            <img style="margin-top: 10px; width: 130px;" src="/img/logo-api.png" alt="API Control">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                login: {
                    user: "",
                    password: "",
                },
                terms: false,
                ruleInline: {
                    user: [
                        { required: true, message: 'Usuario es requerido', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Contraseña es requerida', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            loginHandler(){
                this.$refs['loginForm'].validate((valid) => {
                    if(valid){
                        EventBus.$emit("toggle-loading", true)

                        $.ajax({
                            type: 'POST',
                            url: 'http://localhost/login',
                            dataType: 'json',
                            data: JSON.stringify({
                                "Clave": this.login.user,
                                "Contrasena": this.login.password,
                                "DirIP": "192.168.1.4",
                                "TipoAcceso": "MOVIL",
                            }),
                            beforeSend: function(x) {
                                if (x && x.overrideMimeType) {
                                    x.overrideMimeType("application/json");
                                }
                            },
                            success: (response) => {
                                if(response.correcto == true){
                                    this.$store.dispatch("SET_USER", {user: response.IdUsuario})
                                    this.$root.OneSignalInit(response.user)
                                    this.$router.push("/dashboard")
                                }
                                else {
                                    this.$Message.error({
                                        content: Mensaje(response.mensaje),
                                        duration: 6,
                                    })
                                    EventBus.$emit("toggle-loading", false)
                                }
                            },
                            error: (request, status, error) => {
                                this.$Message.error({
                                    content: Mensaje(response.mensaje),
                                    duration: 6,
                                })
                                EventBus.$emit("toggle-loading", false)
                            }
                        })
                    }
                })
            }
        }
    }

    function Mensaje(numero)
    {
        if(numero==0)
        {
            return "Login Exitoso";
        }else
        {
            return "Ocurrio un Problema";
        }
    }
</script>

<style lang="sass">
    .divider
        flex: 1

    
</style>