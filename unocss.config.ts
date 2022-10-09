import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'

export default defineConfig({
	shortcuts: [],
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.2,
			warn: true,
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'Play',
				serif: 'PT Serif',
				mono: 'PT Mono',
			},
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
