// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// export default ({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), 'VITE_');

//   const port = parseInt(env.VITE_PORT, 10);
//   if (!port) {
//     throw new Error('VITE_PORT is not defined in the environment file');
//   }

//   return defineConfig({
//     plugins: [react()],
//     server: {
//       port,
//     },
//   });
// };


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
})

