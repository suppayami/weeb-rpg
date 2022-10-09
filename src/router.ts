import { createRouter, createWebHistory } from 'vue-router'

import NewPlayerViewVue from '@/module/player/NewPlayerView.vue'

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/', component: NewPlayerViewVue,
		},
	],
})
