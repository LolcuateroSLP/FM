<template>
    <Modal v-model="show" width="300" :footer-hide="true">
        <h2 class="item-title">{{ item.title }}</h2>
        <!-- <UserAvatar header="Último Cambio" footer="18/Septiembre/2019 - 15:45:23" name="Javier Rodríguez" /> -->
        <br>
        <Measure v-if="item.editable != false" :item="item" />
        <template v-else>
            <template v-if="item.measure == 'runs'">
                <Row>
                    <Col offset="4" span="8">
                        <p class="numb min">{{ item.values.minutes }} <span class="temp">min</span></p>
                    </Col>
                    <Col span="8">
                        <p class="numb min">{{ item.values.runs }} <span class="temp">runs</span></p>
                    </Col>
                </Row>
            </template>
            <template v-if="item.measure == 'mins'">
                <Row>
                    <Col offset="4" span="8">
                        <p class="numb min">{{ item.values[0] }} <span class="temp">min</span></p>
                    </Col>
                    <Col span="8">
                        <p class="numb min">{{ item.values[1] }} <span class="temp">min</span></p>
                        <p class="center-text" style="font-size: 0.8em; color: grey; margin-top: -7px; margin-left: 15px">Ciclo anterior</p>
                    </Col>
                </Row>
            </template>
            <template v-if="item.measure == 'hours'">
                <Row>
                    <Col offset="8" span="8">
                        <p class="numb min">{{ item.value }} <span class="temp">hrs</span></p>
                    </Col>
                </Row>
            </template>
            <template v-if="item.measure == 'text'">
                <Row>
                    <Col offset="8" span="8">
                        <p>{{ item.value }}</p>
                    </Col>
                </Row>
            </template>
            <!-- Days -->
            <template v-if="item.measure == 'days'">
                <p class="numb min">{{ item.value }} <span class="temp">días</span></p>
            </template>
        </template>
        <br>
        <iButton v-if="item.editable != false" style="margin-top: 5px" long type="primary">Actualizar</iButton>

        <!-- Actionable -->
        <template v-if="item.actionable">
            <Row :gutter="16" type="flex" justify="center">
                <Col span="12">
                    <DatePicker v-model="date" type="date" placeholder="Selecciona la fecha" style="width: 100%"/>
                </Col>
                <Col span="12">
                    <iButton :disabled="date === ''" @click.native="item.action(date)" long type="primary">{{ item.actionableText }}</iButton>
                </Col>
            </Row>
        </template>
        <Divider style="margin-bottom: 10px;" />
        <UserAvatar header="Último Cambio" footer="18/Septiembre/2019 - 15:45:23" name="Javier Rodríguez" />

    </Modal>
</template>

<script>
    import Measure from "./Measure"

    export default {
        data(){
            return {
                show: false,
                date: "",
                item: {},
            }
        },
        mounted(){
            EventBus.$on("update-info-popup", (item) => {
                this.item = {
                    ...item,
                }
                this.show = true
            })
        },
        components: {
            Measure,
        }
    }
</script>

<style lang="sass">
    .ivu-modal-body
        padding: 26px !important
    
    .item-title
        color: black
        text-align: center
</style>