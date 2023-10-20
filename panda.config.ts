import { defineConfig } from "@pandacss/dev"
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'neutral',
      grayColor: 'neutral',
      borderRadius: 'sm',
    }),
  ],
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: 'react',
  theme: {
    extend: {}
  },
  outdir: "./src/styled-system",
})
