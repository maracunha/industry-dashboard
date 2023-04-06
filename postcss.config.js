export default {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: { config: './tailwind.config.ts' },
    autoprefixer: {},
  }
}
