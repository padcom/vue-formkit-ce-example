//
// TailwindCSS configuration file
//
// For the sake of running the dev server and building the project it would be
// enough to include this configuration directly in vite.config.js under
// `css.postcss.plugins[tailwindcss]`.
// For vscode this config needs to be separate - that's where the TailwindCSS
// extension takes configuration.
//

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  },
}
