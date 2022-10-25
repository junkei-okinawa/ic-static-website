/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'Avenir': ['Avenir'],
        'Helvetica Neue': ['Helvetica Neue'],
        'Helvetica': ['Helvetica'],
        'Arial': ['Arial'],
        'Hiragino Sans': ['Hiragino Sans'],
        'ヒラギノ角ゴシック': ['ヒラギノ角ゴシック'],
        'メイリオ': ['メイリオ'],
        'Meiryo': ['Meiryo'],
        'YuGothic': ['YuGothic'],
        'Yu Gothic': ['Yu Gothic'],
        'ＭＳ Ｐゴシック': ['ＭＳ Ｐゴシック'],
        'MS PGothic': ['MS PGothic'],
        'sans-serif': ['sans-serif'],
        'ui': ['system-ui', '-apple-system']
      },
    },
  },
  plugins: [],
}
