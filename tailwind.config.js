/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './node_modules//flowbite/**/*.js'],

  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        Inter: ['Inter'],
        Lobster: ['Lobster', 'sans-serif'],
        Jost: ['Jost', 'serif'],
        Lobster2: ['Lobster Two', 'serif'],
        poppins: ['poppin', 'serif'],
        nunto : ['nunto', 'sans-serif'],
        
      },
      colors: {
        primary:'#1d4ed8',
        dark : '#0f172a',
        sec: '#f8fafc',
        tex : '#64748b'
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [
  ],
}

