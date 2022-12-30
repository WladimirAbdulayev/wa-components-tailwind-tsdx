module.exports = {
  purge: [
    './src/components/**/*.tsx',
    './src/components/**/*.styled.ts',
    './src/components/**/*.styled.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#012e50',
        secondary: '#779ed0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
