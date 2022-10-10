<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import { usePlayerStore } from '@/module/player/player.store'

const router = useRouter()
const player = usePlayerStore()

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
	<div class="text-center flex-col gap-2 flex">
		<h1 class="font-bold">
			Welcome back, {{ player.name }}
		</h1>

		<div>
			<AppButton @click="deleteCharacterHandler">
				Delete Character
			</AppButton>
		</div>
	</div>
</template>
