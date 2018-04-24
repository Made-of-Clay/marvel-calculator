import Vue from 'vue';
import VueCircleSlider from 'vue-circle-slider';
import App from './App';

Vue.use(VueCircleSlider);

new Vue({
    el: '#app',
    render: h => h(App)
});
