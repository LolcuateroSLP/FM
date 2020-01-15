import Vue from 'vue'

var EventBus = new Vue()
window.EventBus = EventBus

import iView from 'iview';
import locale from 'iview/dist/locale/es-ES';
import { Switch } from 'iview';
import './iview-theme/index.less'
Vue.use(iView, { locale });
Vue.component('iSwitch', Switch);

import ElementUI from 'element-ui';
import "./element-theme/index.scss"
Vue.use(ElementUI);

var _ = require('lodash');
window._ = _

import { VueMasonryPlugin } from 'vue-masonry';
Vue.use(VueMasonryPlugin)

//Moment configuration (Dates)
let moment = require('moment');
window.moment = moment
moment.locale("es");

Vue.use(require('vue-moment'), {
    moment,
});

var jquery = require("jquery")
window.$ = jquery