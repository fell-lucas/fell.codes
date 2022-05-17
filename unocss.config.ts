import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-orange-600 text-white cursor-pointer hover:bg-orange-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-orange-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.35,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Fira Code:300,400,500,600',
        mono: 'Fira Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
