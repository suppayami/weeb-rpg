import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

type PlayerState = 'new' | 'saved'

export const usePlayerStore = defineStore('player', () => {
	const state = ref<PlayerState>('new')
	const name = ref('')

	function createNewPlayer(info: { name: string }) {
		if (state.value !== 'new') {
			throw new Error('Currently using a saved player, cannot create a new one.')
		}
		name.value = info.name
		state.value = 'saved'
	}

	return { name, createNewPlayer }
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
}
