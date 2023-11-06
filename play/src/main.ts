import sumComponents from '@summitsum/components';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(sumComponents)
app.mount('#app')
