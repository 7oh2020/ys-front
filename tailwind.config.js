/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // フォントファイルのインポートは/src/common/styles/global.cssで行っています
        //フォントを bodyタグに適用しています。
        noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
