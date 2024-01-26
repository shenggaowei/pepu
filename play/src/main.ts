import Pepu from 'pepu';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(Pepu)
app.mount('#app')
