<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import { usePlayerStore } from '@/module/player/player.store'

const router = useRouter()
const player = usePlayerStore()

const name = ref('')
const enterHandler = () => {
	player.createNewPlayer({ name: name.value })
}

watchEffect(() => {
	if (player.isSavedPlayer) {
		router.replace('/')
	}
})
</script>

<template>
	<div
		text-center
		flex="~ col gap-4"
	>
		<div>
			<h1
				font-bold
				text-xl
			>
				Weeb RPG
			</h1>
			<h3>Welcome to Weeb World, please enter your name</h3>
		</div>

		<form
			flex="~ col items-center gap-2"
			@submit.prevent="enterHandler"
		>
			<input
				v-model="name"
				type="text"
				border="~ rounded"
				p-2
				ring="focus:~ focus:blue-400 focus:2"
				outline="none"
				w-full
				text-black
				placeholder="Enter your name..."
			>

			<AppButton
				type="submit"
			>
				Enter
			</AppButton>
		</form>
	</div>
</template>
