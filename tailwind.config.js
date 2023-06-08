/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  },
}
