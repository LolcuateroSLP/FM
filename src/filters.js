import Vue from "vue"

Vue.filter("avatarName", (value) => {
    return value.split(' ').map( (item) => { return item[0] } ).join('').toUpperCase();
})

Vue.filter('name', (value) => {
	return value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
})

Vue.filter('price', function (value) {
	if (value.length == 0) return ''
	return '$ ' + Number(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

Vue.filter('quantity', function(value){
    if(value.length == 0) return ''
    return value > 9 ? "" + value: "0" + value;
})