import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routers';
import { createPinia } from 'pinia';
import 'amfe-flexible';
import 'styles/index.scss';

createApp(App).use(router).use(createPinia()).mount('#app');
