<script setup lang="ts">
import { ref } from 'vue'

import AppButton from '@/components/AppButton.vue'
import { usePlayerStore } from '@/module/player/player.store'

const player = usePlayerStore()

const name = ref('')
const enterHandler = () => {
	player.createNewPlayer({ name: name.value })
}
</script>

<template>
	<div class="text-center gap-4 flex flex-col">
		<div>
			<h1 class="font-bold text-xl">
				Weeb RPG
			</h1>
			<h3>Welcome to Weeb World, please enter your name</h3>
			<h5>Hello {{ player.name }}</h5>
		</div>

		<div class="flex flex-col gap-2 items-center">
			<input
				v-model="name"
				type="text"
				class="border p-2 rounded focus:ring focus:ring-lightBlue focus:outline-none w-full text-black"
				placeholder="Enter your name..."
			>

			<AppButton @click="enterHandler">
				Enter
			</AppButton>
		</div>
	</div>
</template>
