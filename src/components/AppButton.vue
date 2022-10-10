<script setup lang="ts"></script>

<template>
	<button
		rounded
		p-2
		w-full
		bg="cyan-700 hover:cyan-800 active:cyan-900"
		text-white
		shadow
		transition
	>
		<slot />
	</button>
</template>
