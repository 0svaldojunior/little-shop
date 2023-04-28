import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      purple500: '#613faf',
      purple300: '#8257e6',

      green300: '#00B37E',
      green500: '#00875f',

      linear: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

      black06: 'rgba(0, 0, 0, 0.6)',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
