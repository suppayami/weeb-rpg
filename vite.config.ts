import path from 'path'

import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [
		vue(),
		Unocss({
			configFile: 'unocss.config.ts',
		}),
	],
})
