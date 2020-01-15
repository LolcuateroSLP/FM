<template>
    <div>
        <h2 class="section-title">Dashboard</h2>
        <Row type="flex" justify="center" :gutter="16">
            <Col span="24">
                <p style="font-size: 0.9em; text-align: center; margin-bottom: 10px;">Informacion de los pedidos</p>
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Estatus 1</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending2" class="medidor-temp">
                    <p class="numb">29 </p>
                    <p style="padding: 0 7px" class="center-text">Estatus 2</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Estatus 3</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Temp. Zona SITE01</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Temp. Zona SITE01</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Temp. Zona SITE01</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Temp. Zona SITE01</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Temp. Zona SITE01</p>
                </div>
                <!-- <br>
                <p class="numb min">21 </p>
                <p class="center-text">SETPOINT</p> -->
            </Col>
            <Col span="0" style="display: flex; align-items: center; flex-direction: column;">
                <div @click="showTrending" class="medidor-temp">
                    <p class="numb">28 </p>
                    <p style="padding: 0 7px" class="center-text">Temp. Zona SITE01</p>
                </div>
            </Col>
            
        </Row>
    

    </div>

</template>

<script>
    import Chart from "./components/Chart"
    import InforPedidos from "./components/InfoPedidos"
  
    export default {
        methods: {
            showTrending(){
                this.$router.push('/parametros/1')
            },

            showTrending2(){
                this.$router.push('/parametros/2')
            }


        },
        mounted(){
            setTimeout(() => {
                EventBus.$emit("toggle-loading", false);
            }, 1000);
        },
        components: {
            Chart,
        }
    }


    

</script>

<style lang="sass">
    .medidor-temp
        width: 90px
        height: 90px
        border: 5px solid #d91e18
        border-radius: 101%
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        &.green
            border-color: #2ecc71

    .numb
        position: relative
        font-size: 20px
        font-weight: 900
        margin-right: 15px
        text-align: center
        & .temp
            font-size: 20px
            color: grey
            font-weight: normal
            position: absolute
            top: 6px
            padding-left: 5px
        &.min
            font-size: 25px
            & .temp
                font-size: 16px
                // top: 3px
                // padding-left: 2px
</style>