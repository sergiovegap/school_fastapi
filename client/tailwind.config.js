export default {
   content: [
     './index.html',
     './src/**/*.{vue,js,ts,jsx,tsx}',
     './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
   ],
   theme: {
     extend: {},
   },
   plugins: [
     require('flowbite/plugin'),
   ],
}
 