<template>
    <div>
        <h2 class="section-title">Ajustes</h2>
        <Row type="flex" justify="center">
            <Col span="19">
                <h4>Límite alto de temperatura de zona</h4>
            </Col>
            <Col span="5">
                <InputNumber v-model="limiteAlto" size="small" :formatter="value => `${value} ºC`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="parser"/>
            </Col>
            <Col span="24">
                <p>&nbsp;</p>
            </Col>
            <Col span="19">
                <h4>Límite bajo de temperatura de zona</h4>
            </Col>
            <Col span="5">
                <InputNumber v-model="limiteBajo" size="small" :formatter="value => `${value} ºC`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="parser"/>
            </Col>
            <Col span="24">
                <p>&nbsp;</p>
            </Col>
            <Col span="19">
                <h4>Arranque Comp. temperatura interior</h4>
            </Col>
            <Col span="5">
                <InputNumber v-model="arranqueComp" size="small" :formatter="value => `${value} min`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="parser"/>
            </Col>
            <Col span="24">
                <p>&nbsp;</p>
            </Col>
            <Col span="19">
                <h4>Límite de arranque corriente ventilador</h4>
            </Col>
            <Col span="5">
                <InputNumber v-model="limiteArranqueVent" size="small" :formatter="value => `${value} amp`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="parser"/>
            </Col>
            <Col span="24">
                <p>&nbsp;</p>
            </Col>
            <Col span="19">
                <h4>Límite de arranque corriente comp</h4>
            </Col>
            <Col span="5">
                <InputNumber v-model="limiteArranqueComp" size="small" :formatter="value => `${value} amp`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="parser"/>
            </Col>
            <Col span="24">
                <p>&nbsp;</p>
            </Col>
            <Col span="19">
                <h4>Min ON Vent y Comp</h4>
            </Col>
            <Col span="5">
                <InputNumber v-model=minONVentComp size="small" :formatter="value => `${value} min`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="parser"/>
            </Col>
            <Col span="24">
                <p>&nbsp;</p>
            </Col>
            <Col span="19">
                <h4>Min OFF Vent y Comp</h4>
            </Col>
            <Col span="5">
                <InputNumber v-model=minOFFVentComp size="small" :formatter="value => `${value} min`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="parser"/>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                limiteAlto: 26,
                limiteBajo: 20,
                arranqueComp: 1,
                limiteArranqueVent: 1,
                limiteArranqueComp: 1,
                minONVentComp: 5,
                minOFFVentComp: 5,
            }
        },
        methods: {
            parser: value => value.replace(/$s?|(,*)/g, '')
        }
    }
</script>