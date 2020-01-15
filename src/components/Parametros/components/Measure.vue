<template>
    <div style="display: flex; justify-content: center; align-items: center;">
        <!-- Input number -->
        <template v-if="item.measure == 'temperature' || item.measure == 'amp' || item.measure == 'efficiency'">
            <el-input-number v-model="item.value" :min="item.limits ? item.limits.min : 1" :max="item.limits ? item.limits.max : 99" :step="item.steps ? item.steps : 1"/>
        </template>
        
        <!-- Switch -->
        <template v-else-if="item.measure == 'switch'">
            <el-switch v-model="item.value" active-color="#13ce66" inactive-color="#ff4949" active-text="Encendido" inactive-text="Apagado"/>
        </template>

        <!-- Dirt -->
        <template v-if="item.measure == 'dirt'">
            <el-switch v-model="item.value" active-color="#13ce66" inactive-color="#ff4949" active-text="Limpio" inactive-text="Sucio"/>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            item: { required: true, type: [Object, Array] },
        }
    }
</script>