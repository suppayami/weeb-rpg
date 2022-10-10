import { useLocalStorage } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

const DEFAULT_STATS = {
	strength: 1,
	dexterity: 1,
	intelligence: 1,
} as const

export const useCharacterStore = defineStore('character', () => {
	const id = useLocalStorage('character/id', '')
	const stats = ref({ ...DEFAULT_STATS })

	const createCharacter = () => {
		id.value = `${Date.now()}`
		stats.value = { ...DEFAULT_STATS }
	}

	return { id, stats, createCharacter }
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCharacterStore, import.meta.hot))
}
