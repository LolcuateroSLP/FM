<template>
    <div>
        <h2 class="section-title">Tendencias del equipo 1</h2>
        <RadioGroup style="margin-bottom: 20px; display: flex; justify-content: center;" v-model="filter" type="button">
            <Radio label="1 sem"></Radio>
            <Radio label="1 día"></Radio>
            <Radio label="1 hora"></Radio>
            <Radio label="15 min"></Radio>
            <Radio label="1 min"></Radio>
        </RadioGroup>
        <Chart/>
        <p style="font-size: 0.75em; text-align: right; margin-top: 20px;">Última actualización <b>19/09/2019 13:32</b></p>
    </div>
</template>

<script>
    import Chart from "./components/Chart"

    export default {
        data(){
            return {
                filter: "1 min",
            }
        },
        methods: {
            information(){
                this.$router.push('/parametros/1')
            }
        },
        components: {
            Chart,
        }
    }
</script>