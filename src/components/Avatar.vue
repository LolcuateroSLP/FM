<template>
    <div class="user-avatar">
        <Avatar :style="{background: '#1a3180'}">{{ name | avatarName }}</Avatar>
        <div class="info">
            <p class="header">{{ header }}</p>
            <template v-if="type == 'row'">
                <p class="name">{{ name }} <span class="footer">{{ footer }}</span> </p>
            </template>
            <template v-else>
                <p class="name">{{ name }}</p>
                <p style="margin-left: 0 !important;" class="footer">{{ footer }}</p>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: { required: false, type: String, default: "row" }, 
            name: { required: true, type: String },
            header: { required: false, type: String },
            footer: { required: false, type: String },
        }
    }
</script>

<style lang="sass">
    .user-avatar
        padding: 10px
        display: flex
        justify-content: center
        align-items: center
        & .info 
            margin-left: 10px
            & .header, .footer
                font-size: 0.85em
                color: grey
            & .footer
                margin-left: 5px
            & .name
                font-weight: bold
</style>