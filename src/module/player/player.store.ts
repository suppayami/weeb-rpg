import { useLocalStorage } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed } from 'vue'

export const usePlayerStore = defineStore('player', () => {
	const name = useLocalStorage('player/name', '')
	const isSavedPlayer = computed(() => !!name.value)

	function createNewPlayer(info: { name: string }) {
		if (name.value) {
			throw new Error('Currently using a saved player, cannot create a new one.')
		}
		name.value = info.name
	}

	function deletePlayer() {
		name.value = ''
	}

	return {
		name,
		isSavedPlayer,

		createNewPlayer,
		deletePlayer,
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
}
