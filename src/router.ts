import { createRouter, createWebHistory } from 'vue-router'

import NewPlayerViewVue from '@/module/player/NewPlayerView.vue'
import CharacterViewVue from '@/module/rpg/CharacterView.vue'

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/', component: CharacterViewVue,
		},
		{
			path: '/new', component: NewPlayerViewVue,
		},
	],
})
