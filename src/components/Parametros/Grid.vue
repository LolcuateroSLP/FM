<template>
    <div>
        <h2 class="section-title">{{ this.title }}</h2>
        <Row>
            <Col span="16">
                <p>{{ this.description }}</p>
            </Col>
            <Col span="8">
                <div style="display: flex; align-items: flex-end; justify-content: center; flex-direction: column;">
                    <p style="margin-bottom: 7px; font-size: 0.9em">Estado del equipo</p>
                    <iSwitch v-model="status" size="large" class="r-g">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                    </iSwitch>
                </div>
            </Col>
            <Col span="24">
                <Button style="margin-top: 15px" @click.native="$router.push('/zona/1')" long type="primary">Ver Tendencias</Button>
            </Col>
        </Row>
        <br>
        <Row class="params-grid" :gutter="16" v-masonry transition-duration="0.3s" item-selector=".ivu-col">
            <Col v-masonry-tile v-for="item, i in list" :key="i" :span="item.span || 12">
                <el-card @click.native="update(item)">
                    <h3 style="margin-bottom: 10px">{{ item.title }}</h3>
                    <!-- Temperature -->
                    <template v-if="item.measure == 'temperature'">
                        <p class="numb min">{{ item.value }} <span class="temp">ºC</span></p>
                    </template>
                    <!-- Switch -->
                    <template v-else-if="item.measure == 'switch'">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <template v-if="item.value == true">
                                <Tag color="success">Encendido</Tag>
                            </template>
                            <template v-else>
                                <Tag color="error">Apagado</Tag>                            
                            </template>
                        </div>
                    </template>
                    <!-- Ampers -->
                    <template v-else-if="item.measure == 'amp'">
                        <p class="numb min">{{ item.value }} <span class="temp b">AMP</span></p>
                    </template>
                    <!-- Dirt -->
                    <template v-else-if="item.measure == 'dirt'">
                        <div style=" display: flex; justify-content: center; align-items: center;">
                            <template v-if="item.value == true">
                                <Tag color="success">Limpio</Tag>
                            </template>
                            <template v-else>
                                <Tag color="error">Sucio</Tag>                            
                            </template>
                        </div>
                    </template>
                    <!-- Runs -->
                    <template v-else-if="item.measure == 'runs'">
                        <p class="numb min">{{ item.values.minutes }} <span class="temp">min</span></p>
                        <p class="numb min">{{ item.values.runs }} <span class="temp">runs</span></p>
                    </template>
                    <!-- Minutes -->
                    <template v-else-if="item.measure == 'mins'">
                        <p class="numb min">{{ item.values[0] }} <span class="temp">min</span></p>
                        <p class="numb min">{{ item.values[1] }} <span class="temp">min</span></p>
                        <p class="center-text" style="font-size: 0.8em; color: grey; margin-top: -7px; margin-left: 15px">Ciclo anterior</p>
                    </template>
                    <!-- Hours -->
                    <template v-else-if="item.measure == 'hours'">
                        <p class="numb min">{{ item.value }} <span class="temp">hrs</span></p>
                    </template>
                    <!-- Days -->
                    <template v-else-if="item.measure == 'days'">
                        <p class="numb min">{{ item.value }} <span class="temp">días</span></p>
                    </template>
                    <!-- Text -->
                    <template v-else-if="item.measure == 'text'">
                        <p>{{ item.value }}</p>
                    </template>
                    <!-- Efficiency -->
                    <template v-else>
                        <p class="numb min">{{ item.value }} <span class="temp">KW/TR</span></p>
                    </template>
                    <!-- <Button v-if="item.actionable"  @click.native="item.action" long type="primary">{{ item.actionableText }}</Button> -->
                </el-card>
            </Col>
        </Row>
        <Update/>
    </div>
</template>

<script>
    import Update from "./components/Update"

    export default {
        data(){
            return {
                title: "Equipo: SITE01",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro fugiat incidunt?",
                status: true,
                list: [
                    {
                        title: "SETPOINT",
                        measure: "temperature",
                        value: 22,
                        limits: {
                            min: 18,
                            max: 24,
                        }
                    },
                    {
                        title: "Temp. de Zona",
                        measure: "temperature",
                        value: 22,
                    },
                    {
                        title: "Setpoint de Temp",
                        measure: "temperature",
                        value: 22,
                    },
                    {
                        title: "Temp. de Inyección",
                        measure: "temperature",
                        value: 8,
                    },
                    {
                        title: "Temp de Retorno",
                        measure: "temperature",
                        value: 22,
                    },
                    {
                        title: "Temp. Exterior",
                        measure: "temperature",
                        value: 40,
                    },
                    {
                        title: "ST Filtro",
                        measure: "dirt",
                        value: false,
                    },
                    {
                        title: "AP Ventilador",
                        measure: "switch",
                        value: true,
                    },
                    {
                        title: "ST Ventilador",
                        measure: "switch",
                        value: true,
                    },
                    {
                        title: "AP Compresor",
                        measure: "switch",
                        value: false,
                    },
                    {
                        title: "ST Compresor",
                        measure: "switch",
                        value: false,
                    },
                    {
                        title: "Corriente Ventilador",
                        measure: "amp",
                        value: 1.8,
                        steps: 0.1,
                        limits: {
                            min: 0,
                            max: 99,
                        }
                    },
                    {
                        title: "Corriente Compresor",
                        measure: "amp",
                        value: 1.8,
                        steps: 0.1,
                        limits: {
                            min: 0,
                            max: 99,
                        }
                    },
                    {
                        title: "Eficiencia",
                        measure: "efficiency",
                        value: 1.1,
                        steps: 0.1,
                        limits: {
                            min: 0,
                            max: 99,
                        }
                    },
                    /* NO EDITABLE */
                    {
                        editable: false,
                        title: "Estado COOL ON",
                        measure: "mins",
                        values: [23, 45]
                    },
                    {
                        editable: false,
                        title: "Estado COOL OFF",
                        measure: "mins",
                        values: [53, 35]
                    },
                    {
                        editable: false,
                        title: "Operación día anterior",
                        measure: "runs",
                        values: {
                            minutes: 658,
                            runs: 35,
                        }
                    },
                    {
                        editable: false,
                        title: "Operación de hoy",
                        measure: "runs",
                        values: {
                            minutes: 268,
                            runs: 22,
                        }
                    },
                    {
                        span: 24,
                        editable: false,
                        title: "Días desde último mantenimiento",
                        measure: "days",
                        value: 45,
                        actionable: true,
                        actionableText: "Registrar Mantenimiento",
                        action: (date) => { this.updateMantenimiento(date) } ,
                    },
                    {
                        span: 24,
                        editable: false,
                        title: "Días desde último cambio de filtro",
                        measure: "days",
                        value: 23,
                        actionable: true,
                        actionableText: "Registrar Cambio",
                        action: (date) => { this.updateCambioFiltro(date) }
                    }
                ]
            }
        },
        methods: {
            update(item){
                EventBus.$emit("update-info-popup", item)
            },
            updateMantenimiento(date){
                console.log("MANTENIMIENTO CLICK")
                console.log(date)
            },
            updateCambioFiltro(date){
                console.log("CAMBIO DE FILTRO CLICK")
                console.log(date)
            }
        },
        components: {
            Update,
        }
    }
</script>

<style lang="sass">
    .params-grid > .ivu-col
        // border: 1px solid grey
        // min-height: 120px
        margin-bottom: 16px
        & h3
            color: black
            text-align: center
</style>