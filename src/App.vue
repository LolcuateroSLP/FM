<template>
	<div id="app">
		<Layout>
			<loading :active.sync="isLoading" :can-cancel="false" :is-full-page="true" color="#4A89DC"/>
			
			

			<Slide  width="150">
				<a id="home" href="#"> 
					<span>Inicio</span>  
				</a>
				<a id="home" href="#"> 
					<span @click="dashboard">Dashboard</span>  
				</a>
				<a id="home" href="#"> 
					<span>Administracion</span>  
				</a>
				<a id="home" href="#"> 
					<span>Pedidos</span>  
				</a>
				<a id="home" href="#"> 
					<span>Cambiar rol</span>  
				</a>
				<a id="home" href="#"> 
					<span @click="cerrar" >Cerrar Sesion</span>  
				</a>
			</Slide>

			<Content :style="{padding: '0 30px'}">
				<Notifications/>
				<router-view/>
			</Content>
		</Layout>
	</div>
</template>


<script>
	import Loading from 'vue-loading-overlay';
	import 'vue-loading-overlay/dist/vue-loading.css';


	import AppHeader from "./components/Header"
	import Notifications from "./components/Notifications/Popup"

	import {Slide}  from 'vue-burger-menu'
    export default {
		data(){
			return {
				isLoading: false
			}
		},
		methods: {
            dashboard(){
                this.$router.push('/dashboard')
            },

			cerrar(){
                this.$router.push('/')
            }
        },
		mounted(){
			EventBus.$on("toggle-loading", (value) => {
				if(value){
					this.$Spin.show({
						render: (h) => {
							return h('div', [,
								h('img', {
									'class': 'loading-logo',
									attrs: {
										'src': "/img/logo-wics.jpeg",
									},
								}),
								h('Icon', {
									'class': 'demo-spin-icon-load',
									props: {
										type: 'ios-loading',
										size: 35
									}
								}),
							])
						}
					});
				}
				else {
					this.$Spin.hide();
				}
			})

			
		},
        components: {
			Loading,
			AppHeader,
			Notifications,
			Slide ,
        } 
    }

	

</script>

<style lang="sass">
	@import './iview-theme/override.sass'
	

	body
		background-color: #fff !important
	
	.center-text
		text-align: center
		font-family: "Lato", "Roboto", sans-serif !important
	
	.section-title
		color: black
		margin-bottom: 15px
	
	.demo-spin-icon-load
		animation: ani-demo-spin 1s linear infinite
	
	.bm-burger-button 
		position: fixed;
		width: 36px;
		height: 30px;
		left: 36px;
		top: 36px;
		cursor: pointer;
    
	.bm-item-list 
		color: #b8b7ad;
		margin-left: 1%;
		font-size: 20px;
    

</style>