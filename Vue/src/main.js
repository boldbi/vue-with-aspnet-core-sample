import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.config.globalProperties.productionTip = false; // optional; Vue 3 doesn't use productionTip by default
app.mount('#app');