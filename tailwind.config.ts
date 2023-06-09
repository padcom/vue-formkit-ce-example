//
// TailwindCSS configuration file
//
// For the sake of running the dev server and building the project it would be
// enough to include this configuration directly in vite.config.js under
// `css.postcss.plugins[tailwindcss]`.
// For vscode this config needs to be separate - that's where the TailwindCSS
// extension takes configuration.
//

import { type Config } from 'tailwindcss'
import containerQueries from '@tailwindcss/container-queries'
// @ts-ignore because this packet doesn't publish type information
import textStroke from 'tailwindcss-text-stroke'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  plugins: [
    containerQueries,
    textStroke,
  ],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  },
} as Config
