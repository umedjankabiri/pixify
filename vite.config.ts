import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': 'src',
            '@app': 'src/app',
            '@components': 'src/common',
            '@assets': 'src/assets',
            '@features': 'src/features',
        }
    }
})
