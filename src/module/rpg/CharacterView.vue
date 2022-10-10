<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import { usePlayerStore } from '@/module/player/player.store'
import { useCharacterStore } from '@/module/rpg/character.store'

const router = useRouter()
const player = usePlayerStore()
const character = useCharacterStore()

watchEffect(() => {
	if (!player.isSavedPlayer) {
		router.replace('/new')
	}
})

const deleteCharacterHandler = () => {
	player.deletePlayer()
}
</script>

<template>
	<div
		text-center
		flex="~ col gap-2"
	>
		<h1 font-bold>
			Welcome back, {{ player.name }}
		</h1>

		<div>
			<h3>Stats</h3>
			<dl
				text-left
				border="~"
				p-2
				grid="~ cols-2"
			>
				<template
					v-for="(val, key) in character.stats"
					:key="key"
				>
					<dt>{{ key }}</dt>
					<dd text-right>
						{{ val }}
					</dd>
				</template>
			</dl>
		</div>

		<div>
			<AppButton @click="deleteCharacterHandler">
				Delete Character
			</AppButton>
		</div>
	</div>
</template>
