import { defineConfig } from 'vite'


import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://bekkie-etstate-o0rsfrngt-b4bekkies-projects.vercel.app',
        secure: false,
      },
    },
  },
  plugins: [react()],
  
  
}
)

